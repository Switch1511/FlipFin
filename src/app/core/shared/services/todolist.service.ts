import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getToDoListById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "/todolist/" + id);
  }

  getToDoList(): Observable<any[]> {
    return this.http.get<any>(this.url + "/todolist");
  }

  putToDoList(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.url + "/todolist/" + id, body);
  }

  deleteToDoList(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "/todolist/" + id);
  }
}
