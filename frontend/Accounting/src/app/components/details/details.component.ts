import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/backend-services/data.service';
import { Partner } from 'src/app/interfaces/partner.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  partner: Partner;
  partnerId: number;
  hasData:boolean;

  constructor(private data : DataService, private route : ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.partnerId = params.id
      this.data.getPartner(this.partnerId).then((response: any) => {        
        this.partner = JSON.parse(response["_body"]);      
        this.hasData = true;
      })
    })
    
  }

  ngOnInit() {    
      // ha megjön akkor JSON-re alakul
      //this.data.getPartner(this.partnerId).then((response: any) => {        
        //this.partner = JSON.parse(response["_body"]);      
      //})
  }
}
