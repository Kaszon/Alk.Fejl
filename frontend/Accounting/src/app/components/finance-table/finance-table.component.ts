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

  financeTableDataSource : MatTableDataSource<FinanceTableItem> = null

  displayedColumns = ['partnerName', 'amount', 
                      'date_of_deadline', 'date_of_completion','description'];

  constructor(private financeTableService : FinanceTableService) {

  }

  ngOnInit() {
    this.financeTableDataSource = new MatTableDataSource<FinanceTableItem>(this.financeTableService.getFinances())
  }

  ngAfterViewInit() {
    this.financeTableDataSource.paginator =this.paginator
    this.financeTableDataSource.sort = this.sort
  }

  isPositive(amount : number) {
    console.log(amount > 0)
    return amount > 0
  }
}
