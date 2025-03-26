import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getAnnotationById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "/annotation/" + id);
  }

  getAnnotations(): Observable<any[]> {
    return this.http.get<any>(this.url + "/annotation");
  }

  putAnnotation(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.url + "/annotation/" + id, body);
  }

  deleteAnnotation(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "/annotation/" + id);
  }
}
