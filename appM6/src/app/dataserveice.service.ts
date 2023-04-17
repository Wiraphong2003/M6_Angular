import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserveiceService {

  // apiEndpoint = 'https://a1-5ym4.onrender.com';
  apiEndpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }
}
