import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }) {
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${environment.api}/api/auth/login`, credentials, { headers: headers });
  }
}
