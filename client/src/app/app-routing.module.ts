import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewRoommateComponent } from './components/add-new-roommate/add-new-roommate.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MainComponent } from './components/main/main.component';
import { RoommatesListComponent } from './components/roommates-list/roommates-list.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: 'main'},
  {path: 'main', component: MainComponent, 
  children: [
  {path: "roommate", component: RoommatesListComponent},
  {path: "tasks", component: TasksComponent},
  {path: "addnew", component: AddTaskComponent},
  {path: "addroommate", component: AddNewRoommateComponent},
  
]
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
