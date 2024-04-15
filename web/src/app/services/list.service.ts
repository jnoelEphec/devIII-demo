import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = `${environment.api}/api/kanban/cards`;

  constructor(private http: HttpClient) { }

  getLists(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
