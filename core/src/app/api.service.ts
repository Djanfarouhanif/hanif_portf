import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = ''; // L'api du backend 

  constructor(private http:HttpClient) { }

  bookMeeting(data:any): Observable<any> {
      return this.http.post(this.apiUrl, data)
  }
}
