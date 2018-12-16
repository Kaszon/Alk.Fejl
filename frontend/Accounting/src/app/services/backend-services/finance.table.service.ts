import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FinanceTableItem } from 'src/app/interfaces/finance.table.item';

@Injectable()
export class FinanceTableService {

    finances: FinanceTableItem[];
    inited : boolean;

    constructor(private http: HttpClient) { }    

    private get options() {
        const headers = {
          'Content-Type': 'application/json'
        };
    
        if (window.sessionStorage.getItem('token')) {
          headers['Authorization'] = `Basic ${window.sessionStorage.getItem('token')}`;          
        }
    
        return {
          headers: new HttpHeaders(headers)
        }
      };
    
    setFinances(finances : FinanceTableItem[]) {
        this.finances = finances; 
        this.inited = true;       
    }

    refreshFinances() {        
        return this.http.get('http://localhost:8080/api/item/all',this.options).toPromise()        
    }

    addFinance(finance : FinanceTableItem) {        
        return this.http.post('http://localhost:8080/api/item/add',finance,this.options).toPromise()        
    }

    getFinances() {
        return this.finances.slice()
    }
}