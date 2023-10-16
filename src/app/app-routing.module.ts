import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },  
  { path: 'tasks', component: TaskListComponent },  
  { path: 'create-task', component: CreateTaskComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
