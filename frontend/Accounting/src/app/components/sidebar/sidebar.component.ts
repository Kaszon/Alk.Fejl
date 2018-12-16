import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/backend-services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }

  logOutUser() {
    this.authService.logout()
  }
  

}
