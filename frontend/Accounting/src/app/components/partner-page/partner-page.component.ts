import { Component, OnInit, OnDestroy } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner.interface';
import { PartnerService } from 'src/app/services/backend-services/partner.service';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partners: Partner[];
  isAdmin : boolean;

  constructor(
    private partnerService : PartnerService) { }

  ngOnInit() {       
      this.partners = this.partnerService.getPartners();
      this.isAdmin = (JSON.parse(window.sessionStorage.getItem('user')))['role'] === 'ROLE_ADMIN'
  }

  delete(id : number) {
    this.partnerService.deletePartner(id).then( () => {
      this.partners = this.partnerService.getPartners();
    });
    
  }
}
