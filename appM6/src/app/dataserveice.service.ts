import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserveiceService {

  apiEndpoint = 'https://thankful-blue-bullfrog.cyclic.app';
  apiEndpointLocal = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }
}
