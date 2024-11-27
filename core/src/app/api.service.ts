import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private apiUrl = 'https://portbackend-production.up.railway.app/'; // L'api du backend 
  private apiUrl = 'http://127.0.0.1:8000/'
  http = inject(HttpClient)

  bookMeeting(data:any): Observable<any> {
      return this.http.post(this.apiUrl, data)
  }
}
