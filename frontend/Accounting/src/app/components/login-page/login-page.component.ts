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
export class LoginPageComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb : FormBuilder, 
              private authService : AuthenticationService,
              private router : Router) { }

  ngOnInit() {     
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

  get email() {
      return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginClick() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)

    if(sessionStorage.getItem('user') != null) {
      this.router.navigateByUrl('/profile-page')
    }    
  }
}
