import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { catchError, startWith, switchMap, Observable, of as observableOf, merge, map } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskDto, TaskDtoColumns } from 'src/app/model/taskDto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/services/task/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements AfterViewInit {
  displayedColumns: string[] = TaskDtoColumns.map(res => {return res.key});      
  data: TaskDto[] = [];
  taskDtoRes!: TaskDto;
  faEye = faEye;
  faTrashAlt = faTrashAlt;
  formPromo!: FormGroup;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TaskService, private router: Router, private formBuilder: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.formPromo = this.formBuilder.group({
      id: [null],
      title: [null],
      responsible: [null],
      situation: [null]
    });
  }

  ngOnInit(){    
  }

  navigateToEdit(id: any){    
    this.router.navigate(['task', id, 'details']);
  }

  delete(id: any){    
  }

  ngAfterViewInit() {    
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.taskService.get(this.paginator.pageIndex).pipe(catchError(() => observableOf(null)))
        }),
        map(data =>{
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if(data === null) return [];

          this.resultsLength = data.totalItems;
          return data.tasks;
        })
      )
      .subscribe(data => (this.data = data))
  }

  onSubmit() {                
  }

}