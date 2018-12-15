import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actor } from '../../interfaces/actor.interface';
import { Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {

    // Subject: generic osztály, AJAX kérést segít elő
    activeUser: Subject<Actor> = new Subject<Actor>();
    hasActiveUser: Subject<boolean> = new Subject<boolean>();
    loggedIn : boolean;

    constructor(private http: Http) { 

    }

    login(email: string, password: string) {
      let user = { identifier: email, password: password }
      let loginPromise = this.http.post('http://localhost:4200/actor/login', user).toPromise()

      // ha megjön akkor JSON-re alakul
      loginPromise.then((response: Response) => {
        return response.json();
      }).then((response) => { // ha sikerült a response-t JSON-re alakítani, abból csinálunk egy user-t
        let user: Actor = response.data;
        this.activeUser.next(user);
        this.hasActiveUser.next(true); // kiszedjük az adatokat belőle
        
        // key-value
        // lementi a sessionbe a belépett usert
        sessionStorage.setItem('user', JSON.stringify(user));
      })
    }

    logout() {
      sessionStorage.clear();
      this.hasActiveUser.next(false);
    }

    isLoggedIn(): boolean {
        //return sessionStorage.getItem('user') != null;
        return this.loggedIn
    }

    logInUser() {
      this.hasActiveUser.next(true)
      this.loggedIn = true
    }

    logOutUser() {
      this.hasActiveUser.next(false)
      this.loggedIn = false
    }

    getHasActiveUser() {
      return this.hasActiveUser;
    }

    getActiveUser() {
      return this.activeUser;
    }

}