import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  private apiUrl = 'https://portbackend-production.up.railway.app'; // L'api du backend 
  private apiUrl = 'http://127.0.0.1:8000'
  http = inject(HttpClient)

  bookMeeting(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' //pour s'assurer que les données sont envoyées en JSON
    })
      return this.http.post(this.apiUrl, data, { headers })
  }
}
