import { Component, OnInit } from '@angular/core';
import { FinanceTableItem } from 'src/app/interfaces/finance.table.item';
import { FinanceTableService } from 'src/app/services/backend-services/finance.table.service';

@Component({
  selector: 'finance-page',
  templateUrl: './finance-page.component.html',
  styleUrls: ['./finance-page.component.scss']
})
export class FinancePageComponent implements OnInit {  
  ngOnInit() {       
  }

}
