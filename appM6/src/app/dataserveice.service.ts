import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import data from '../assets/Lodata.json'
import t1 from '../assets/H1.json'
import t2 from '../assets/H2.json'
import t3 from '../assets/H3.json'
import t4 from '../assets/H4.json'
import t5 from '../assets/H5.json'

@Injectable({
  providedIn: 'root'
})
export class DataserveiceService {

  // apiEndpoint = 'https://a1-5ym4.onrender.com';
  apiEndpoint = 'http://localhost:3000';
  Lottary !: any;
  t1 !: any;
  t2 !: any;
  t3 !: any;
  t4 !: any;
  t5 !: any;

  constructor(private httpClient: HttpClient) {
    this.Lottary = data;
    this.t1 = t1;
    this.t2 = t2;
    this.t3 = t3;
    this.t4 = t4;
    this.t5 = t5;
  }
}
