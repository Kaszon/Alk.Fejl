import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FinanceTableDataSource } from './finance-table-datasource';

@Component({
  selector: 'finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss'],
})
export class FinanceTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FinanceTableDataSource;

  displayedColumns = ['id', 'actorName', 'partnerName', 'amount', 'date_of_deadline', 'date_of_completion','description'];

  ngOnInit() {
    this.dataSource = new FinanceTableDataSource(this.paginator, this.sort);
  }
}
