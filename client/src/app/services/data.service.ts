import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _request: WebRequestsService) { }

  public getAllRoommates(){
    return this._request.get('roommate')
  }

  public addANewRoommate(body){
    return this._request.post('roommate', body)
  }

  public getAllTasks(){
    return this._request.get('task')
  }

  public addANewTask(body){
    return this._request.post('task', body)
  }

  public deleteTask(taskId){
    return this._request.delete(`task/${taskId}`)
  }


}
