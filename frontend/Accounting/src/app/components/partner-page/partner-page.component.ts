import { Component, OnInit, OnDestroy } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner.interface';
import { PartnerService } from 'src/app/services/backend-services/partner.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partners: Partner[];

  constructor(
    private partnerService : PartnerService) { }

  ngOnInit() {    
    if(!this.partnerService.inited)  {
      this.partnerService.refreshPartners().then((response: Partner[]) => {
        this.partners = response;      
        this.partnerService.setPartners(this.partners);
      })
    }
    else {
      this.partners = this.partnerService.getPartners();
    }    
  }

}
