import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './services/backend-services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Accounting';
  subscription : Subscription
  hasActiveUser : boolean; 

  constructor(private authService : AuthenticationService) {

  }

  ngOnInit(): void {
    this.subscription = this.authService.getHasActiveUser().subscribe((hasActiveUser : boolean) => {
        this.hasActiveUser = hasActiveUser;
    })
  }  

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
