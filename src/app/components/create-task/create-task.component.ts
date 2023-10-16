import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit{
  id!: string | null;
  formPromo!: FormGroup;
  value!: any;
  task!: Task;
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private taskService: TaskService){}

  ngOnInit(): void {        
    this.createForm();
    this.task = <Task>{};
  }
  
  createForm() {
    this.formPromo = this.formBuilder.group({
      title: [null],
      description: [null],
      responsible: [null],
      priotity: [null],
      picker: [null]      
    });
  }

  createTask(task: Task){
    this.taskService.create(task).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (erro) => {              
        console.log(erro)
      }
  });
  }

  onSubmit() {    
    this.task.description = this.formPromo.value.description;
    this.task.title = this.formPromo.value.title;
    this.task.deadLine = this.formPromo.value.picker;
    this.task.responsible = {name: this.formPromo.value.responsible};
    this.task.priorityEnum = this.formPromo.value.priotity;    
    this.createTask(this.task);
  }

}
