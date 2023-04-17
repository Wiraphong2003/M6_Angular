import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserveiceService {

  apiEndpoint = 'https://nodejsapim6.herokuapp.com';
  apiEndpointLocal = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }
}
