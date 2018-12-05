import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/backend-services/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit,OnDestroy {

  loginForm : FormGroup;
  hasActiveUser : boolean
  authServiceSubscription : Subscription

  constructor(private fb : FormBuilder, 
              private authService : AuthenticationService,
              private router : Router) { }

  ngOnInit() { 
    this.authServiceSubscription =
    this.authService.getHasActiveUser().subscribe((hasActiveUser : boolean ) => {
        this.hasActiveUser = hasActiveUser
    })
    
    this.loginForm = this.fb.group({      
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
        });
  }

  ngOnDestroy() {
    this.authServiceSubscription.unsubscribe()
  }

  get email() {
      return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginClick() {
    this.authService.logInUser()
    this.router.navigateByUrl('/profile-page')
  }
}
