import { Injectable } from '@angular/core';
import { Actor } from '../../interfaces/actor.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PartnerService } from './partner.service';
import { Partner } from 'src/app/interfaces/partner.interface';
import { FinanceTableService } from './finance.table.service';

@Injectable()
export class AuthenticationService {

    // Subject: generic osztály, AJAX kérést segít elő
    activeUser: Subject<Actor> = new Subject<Actor>();
    loggedIn : boolean;
    hasActiveUser : Subject<Boolean> = new Subject<Boolean>();

    constructor(private http: HttpClient, 
                private router : Router,
                private partnerService : PartnerService,
                private financeTableService : FinanceTableService) { 

    }

    login(email: string, password: string) {
      let user = { email: email, password: password }
      let loginPromise = this.http.post('http://localhost:8080/api/actor/login', user).toPromise()

      // ha megjön akkor JSON-re alakul
      loginPromise.then((response) => { // ha sikerült a response-t JSON-re alakítani, abból csinálunk egy user-t
        if(response != null) {
          let user: Actor = response;
          this.activeUser.next(user);
          this.hasActiveUser.next(true);
          // key-value
          // lementi a sessionbe a belépett usert
          sessionStorage.setItem('user', JSON.stringify(user));
          const token = btoa(email + ':' + password);
          sessionStorage.setItem('token', token);

          this.partnerService.refreshPartners().then((response: Partner[]) => {
            this.partnerService.setPartners(response);    
            this.financeTableService.refreshFinances().then((response: any) => {
              this.financeTableService.setFinances(response);
              this.router.navigateByUrl('/profile-page')
            })          
          })
        }
      })
    }

    logout() {
      sessionStorage.clear();
      this.hasActiveUser.next(false);
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('user') != null;        
    }

    getActiveUser() {
      return this.activeUser;
    }

    getHasActiveUser() {
      return this.hasActiveUser;
    }

}