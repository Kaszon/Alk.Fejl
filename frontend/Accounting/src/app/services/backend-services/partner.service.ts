import { Injectable } from '@angular/core';
import { Partner } from '../../interfaces/partner.interface';
import { Http } from '@angular/http';


@Injectable()
export class PartnerService {
    partners: Partner[];
    inited : boolean;

    constructor(private http: Http) { }  
    
    setPartners(partners : Partner[]) {
        this.partners = partners; 
        this.inited = true;       
    }

    initPartners() {        
        return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise()
    }

    getPartners() {
        return this.partners.slice()
    }
    
    getPartner(partnerId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/'+partnerId).toPromise()
    }
    
    addPartner(partner : Partner) {
        this.partners.push(partner)
    }
}