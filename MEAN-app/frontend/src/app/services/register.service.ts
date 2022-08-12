import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private ROOT_URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  register(user): Observable<any> {
    return this.http.post<any>(`${this.ROOT_URL}/register`, user);
  }
}
