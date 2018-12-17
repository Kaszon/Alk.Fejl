import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActorService {    
    

    constructor(private http: HttpClient) { }    

    private get options() {
        const headers = {
          'Content-Type': 'application/json'
        };
    
        if (window.sessionStorage.getItem('token')) {
          headers['Authorization'] = `Basic ${window.sessionStorage.getItem('token')}`;    
          console.log(headers['Authorization'])      
        }
    
        return {
          headers: new HttpHeaders(headers)
        }
      };

    updateBalance(id, amount) {
        return this.http.put('http://localhost:8080/api/actor/update/balance/'+id,amount, this.options).toPromise()        
    }    
}