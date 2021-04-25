import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TaskInterface from 'src/app/interfaces/task.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: TaskInterface [] = [] 

  constructor(public _data: DataService, public _router: Router) { }

  ngOnInit(): void {
    this._data.getAllTasks().subscribe((res: any) => {
      this.tasks = res;
    })
  }


  deleteTask(taskId) {
    this._data.deleteTask(taskId).subscribe((res: any) => {
     this.tasks = this.tasks.filter((task) => task._id != taskId)
    })
  }
}
