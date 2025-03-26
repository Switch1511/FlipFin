import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getFlashcardById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "/flashcard/" + id);
  }

  getFlashcards(): Observable<any[]> {
    return this.http.get<any>(this.url + "/flashcard");
  }

  putFlashcards(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.url + "/flashcard/" + id, body);
  }

  deleteFlashcards(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "/flashcard/" + id);
  }
}
