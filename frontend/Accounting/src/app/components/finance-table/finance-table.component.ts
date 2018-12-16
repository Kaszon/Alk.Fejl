import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {FinanceTableItem} from '../../interfaces/finance.table.item'
import { FinanceTableService } from 'src/app/services/backend-services/finance.table.service';

@Component({
  selector: 'finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss'],
})
export class FinanceTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  financeTableDataSource : MatTableDataSource<FinanceTableItem> = new MatTableDataSource<FinanceTableItem>()
  finances : FinanceTableItem[]


  displayedColumns = ['partnerName', 'amount', 
                      'dateOfDeadline', 'dateOfCompletion','description'];

  constructor(private financeTableService : FinanceTableService) {

  }

  ngOnInit() {
    //this.initFinancesDataSource([]);
    if(!this.financeTableService.inited)  {
      this.financeTableService.refreshFinances().then((response: any) => {
        this.finances = response;   
        this.financeTableService.setFinances(this.finances);
        this.initFinancesDataSource(this.finances);
      })
    }
    else {
      this.finances = this.financeTableService.getFinances();
      this.initFinancesDataSource(this.finances);
    }      
  }

  initFinancesDataSource(finances : any) {
    this.financeTableDataSource = new MatTableDataSource<FinanceTableItem>(finances)    
  }

  ngAfterViewInit() {   
    this.financeTableDataSource.paginator = this.paginator
    this.financeTableDataSource.sort = this.sort
  }

  isPositive(amount : number) {
    return amount > 0
  }
}
