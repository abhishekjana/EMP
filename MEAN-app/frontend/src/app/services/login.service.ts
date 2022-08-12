import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private ROOT_URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post<any>(`${this.ROOT_URL}/login`, user);
  }
}
