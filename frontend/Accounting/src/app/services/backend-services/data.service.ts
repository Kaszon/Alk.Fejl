import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }  

  getPartners() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise()
  }

  getPartner(partnerId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+partnerId).toPromise()
  }

  // getIncome, getExpense etc ...


}
