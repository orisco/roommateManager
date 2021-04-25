import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RoommatesListComponent } from './components/roommates-list/roommates-list.component';
import { MainComponent } from './components/main/main.component';
import { AddNewRoommateComponent } from './components/add-new-roommate/add-new-roommate.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    RoommatesListComponent,
    MainComponent,
    AddNewRoommateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
