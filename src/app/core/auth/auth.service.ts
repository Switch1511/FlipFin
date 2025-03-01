import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) {}

  login(): Observable<boolean> {
    sessionStorage.setItem('access_token', '123');
    return of(true);
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }
}
