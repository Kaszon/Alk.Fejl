import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/backend-services/authentication.service';
import { Actor } from 'src/app/interfaces/actor.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  actor : Actor;
  subscription : Subscription
  hasData : boolean;

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {

    this.hasData = this.authService.isLoggedIn()
    this.actor = JSON.parse(window.sessionStorage.getItem('user'));
    console.log(this.hasData)
      this.subscription = this.authService.getActiveUser().subscribe((actor : Actor) => {
          console.log(actor);          
          this.hasData = true;
          this.actor = actor; 
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
