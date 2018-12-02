import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  partner$: Object;

  constructor(private data : DataService, private route : ActivatedRoute) { 

    this.route.params.subscribe(params => this.partner$ = params.id)

  }

  ngOnInit() {
    this.data.getPartner(this.partner$).subscribe(
      data => this.partner$ = data
    )
  }

}
