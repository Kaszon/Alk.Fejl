import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  name = "Teszt Elek"
  email = "proba@email.com"
  balance = 375077

  constructor() { }

  ngOnInit() {
  }

}
