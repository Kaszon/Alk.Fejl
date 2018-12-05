import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/backend-services/data.service';
import { Partner } from 'src/app/interfaces/partner.interface';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partners: Partner[];

  constructor(private data: DataService) { }

  
  ngOnInit() {    
      // ha megjön akkor JSON-re alakul
      this.data.getPartners().then((response: any) => {
        this.partners = JSON.parse(response["_body"]);      
      })
  }

}
