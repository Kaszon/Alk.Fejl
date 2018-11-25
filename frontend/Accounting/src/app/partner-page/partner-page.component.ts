import { Component, OnInit } from '@angular/core';
import { PartnerDataService } from '../partner-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partners$: Object;


  constructor(private data: PartnerDataService) { }


  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.partners$ = data 
    );
  }

}
