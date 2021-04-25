import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:5001'
   }


public get(uri: string) {
  return this.http.get(`${this.ROOT_URL}/${uri}`);
}

public post(uri: string, body: object) {
  return this.http.post(`${this.ROOT_URL}/${uri}`, body);
}

public put(uri: string, body: object) {
  return this.http.put(`${this.ROOT_URL}/${uri}`, body);
}

public delete(uri: string) {
  return this.http.delete(`${this.ROOT_URL}/${uri}`);
}
}