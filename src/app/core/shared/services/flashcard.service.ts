import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getFlashcards(){
    return this.http.get<any>(this.url + "/flashcard");
  }
}
