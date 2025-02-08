import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    sessionStorage.setItem('access_token', '123');
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }
}
