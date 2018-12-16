import { Injectable } from '@angular/core';
import { Partner } from '../../interfaces/partner.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartnerService {
    partners: Partner[];
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
    
    setPartners(partners : Partner[]) {
        this.partners = partners; 
        this.inited = true;       
    }

    refreshPartners() {        
        return this.http.get('http://localhost:8080/api/partner/all',this.options).toPromise()        
    }

    addPartner(partner : Partner) {        
        return this.http.post('http://localhost:8080/api/partner/add',partner,this.options).toPromise()        
    }

    getPartners() {
        return this.partners.slice()
    }
}