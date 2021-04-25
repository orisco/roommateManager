import { Component, OnInit } from '@angular/core';
import RoommateInterface from 'src/app/interfaces/roommate.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-roommates-list',
  templateUrl: './roommates-list.component.html',
  styleUrls: ['./roommates-list.component.scss']
})
export class RoommatesListComponent implements OnInit {

  public RoommateList: RoommateInterface 

  constructor(public _data: DataService) { }

  ngOnInit(): void {
    this._data.getAllRoommates().subscribe((res: any) => {
      this.RoommateList = res
    })

  }

}
