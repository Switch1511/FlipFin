import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getAnnotations(){
    return this.http.get<any>(this.url + "/annotation");
  }
}
