import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenewalsService {
  private baseUrl = '../assets/renewals.json';

  constructor(private httpClient: HttpClient) { }

  getRenewals() {
    return this.httpClient.get(this.baseUrl);
  }
}