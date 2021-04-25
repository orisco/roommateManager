import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RoommateInterface from 'src/app/interfaces/roommate.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public RoommateList: RoommateInterface
  public myForm: FormGroup
  public error = false;

  constructor( public _fb: FormBuilder, public data: DataService, public _router: Router) { }

  ngOnInit(): void {
    this.data.getAllRoommates().subscribe((res: any) => {
      this.RoommateList = res
    })

    this.myForm = this._fb.group({
      description: ["", [Validators.required]],
      _roommateId: ["", [Validators.required]],
    })
  }

  addTask() {

    this.data.addANewTask(this.myForm.value).subscribe((res: any) => {
      this._router.navigateByUrl('/main/tasks')
    }, (err) => {
      console.log("error")
      this.error = true;
    })
  }

}
