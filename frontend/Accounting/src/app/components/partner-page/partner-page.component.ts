import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partners$: Object;


  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.getPartners().subscribe(
      data => this.partners$ = data 
    );
  }

}
