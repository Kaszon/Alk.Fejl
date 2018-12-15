import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/backend-services/data.service';
import { Partner } from 'src/app/interfaces/partner.interface';
import { PartnerService } from 'src/app/services/backend-services/partner.service';

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
    console.log("init")
     this.partnerService.initPartners().then((response: any) => {
      this.partners = JSON.parse(response["_body"]);      
      this.partnerService.setPartners(this.partners)
    })
  }

}
