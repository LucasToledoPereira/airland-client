import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private http: HttpClient) { }

  health() {
    this.http.get('http://localhost:8080/v1/private/health').subscribe((resp) => {
      console.log(resp)
    })
  }
}
