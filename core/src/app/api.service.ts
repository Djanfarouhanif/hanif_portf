import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = ''; // L'api du backend 

  http = inject(HttpClient)

  bookMeeting(data:any): Observable<any> {
      return this.http.post(this.apiUrl, data)
  }
}
