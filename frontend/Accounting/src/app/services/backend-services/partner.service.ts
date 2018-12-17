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

    deletePartner(id : number) {
        let counter = 0;
        for (var i=0; i<this.partners.length; i++) {
            if(this.partners[i].id == id) {                
                counter = i;
                break;
            }
        }
        this.partners.splice(counter,1)
        return this.http.delete('http://localhost:8080/api/partner/delete/'+id,this.options).toPromise()        
    }

    getPartners() {
        return this.partners.slice()
    }

    getPartnerNames() {
        let partnerNames = []
        this.partners.forEach(partner => {
            partnerNames.push(partner.name)
        });
        return partnerNames
    }
}