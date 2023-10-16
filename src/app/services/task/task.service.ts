import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Environment } from "src/environments/environment.development";
import { PageableTask } from "src/app/model/pageable-task";
import { Task } from "src/app/model/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {  
  constructor(private httpClient: HttpClient) { }

  get(page: number): Observable<PageableTask>{    
    return this.httpClient.get<PageableTask>(`${Environment.baseUrl}tasks?page=${page}`);
  }

  create(task: Task): Observable<any>{
    return this.httpClient.post<any>(`${Environment.baseUrl}tasks`, task);
  }
  
}
