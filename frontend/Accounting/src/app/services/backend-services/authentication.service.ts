import { Injectable } from '@angular/core';
import { Actor } from '../../interfaces/actor.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

    // Subject: generic osztály, AJAX kérést segít elő
    activeUser: Subject<Actor> = new Subject<Actor>();
    loggedIn : boolean;

    constructor(private http: HttpClient) { 

    }

    login(email: string, password: string) {
      let user = { email: email, password: password }
      let loginPromise = this.http.post('http://localhost:8080/api/actor/login', user).toPromise()

      // ha megjön akkor JSON-re alakul
      loginPromise.then((response) => { // ha sikerült a response-t JSON-re alakítani, abból csinálunk egy user-t
        if(response != null) {
          let user: Actor = response;
          this.activeUser.next(user);
          // key-value
          // lementi a sessionbe a belépett usert
          sessionStorage.setItem('user', JSON.stringify(user));
          const token = btoa(email + ':' + password);
          sessionStorage.setItem('token', token);

        }
      })
    }

    logout() {
      sessionStorage.clear();
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('user') != null;        
    }

    getActiveUser() {
      return this.activeUser;
    }

}