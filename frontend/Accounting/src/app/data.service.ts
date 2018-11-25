import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  

  getPartners() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPartner(partnerId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+partnerId)
  }

  // getIncome, getExpense etc ...


}
