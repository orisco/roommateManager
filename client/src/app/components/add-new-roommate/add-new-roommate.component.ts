import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-new-roommate',
  templateUrl: './add-new-roommate.component.html',
  styleUrls: ['./add-new-roommate.component.scss']
})
export class AddNewRoommateComponent implements OnInit {

  public myForm: FormGroup

  constructor(
    public _fb: FormBuilder, public data: DataService, public _router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      name: ["", [Validators.required]],
      nickname: ["", [Validators.required]],
      title: ["", [Validators.required]]
    })
  }


  addRoommate() {
    this.data.addANewRoommate(this.myForm.value).subscribe((res: any) => {
      this._router.navigateByUrl('/main/roommate')
    }, (err) => {
      console.log(err)
    })
  }
}
