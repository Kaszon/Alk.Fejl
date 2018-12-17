import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {FinanceTableItem} from '../../interfaces/finance.table.item'
import { FinanceTableService } from 'src/app/services/backend-services/finance.table.service';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/backend-services/actor.service';
import { Actor } from 'src/app/interfaces/actor.interface';

@Component({
  selector: 'finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss']
})
export class FinanceTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  financeTableDataSource : MatTableDataSource<FinanceTableItem> = new MatTableDataSource<FinanceTableItem>()
  finances : FinanceTableItem[]


  displayedColumns = ['partnerName', 'amount', 
                      'dateOfDeadline', 'dateOfCompletion','description','delete'];

  constructor(private financeTableService : FinanceTableService,
              private cd : ChangeDetectorRef,
              private actorService : ActorService) {
  }

  ngOnInit() {  
    this.initTableDataSource()
  }

  initTableDataSource() {
    this.finances = this.financeTableService.getFinances();
    this.financeTableDataSource = new MatTableDataSource<FinanceTableItem>(this.finances)
  }

  // miután létrejött a html
  ngAfterViewInit() {   
    this.financeTableDataSource.paginator = this.paginator
    this.financeTableDataSource.sort = this.sort
  }

  isPositive(amount : number) {
    return amount > 0
  }

  delete(id : number, amount : number) {
    this.financeTableService.deleteFinance(id).then( () => {
      this.initTableDataSource()      
      let actor = JSON.parse(window.sessionStorage.getItem('user'))
      this.actorService.updateBalance(actor['id'],-amount).then((actor : Actor)=>{     
        window.sessionStorage.setItem('user',JSON.stringify(actor))     
        this.cd.detectChanges()
      })       
    });
    
  }
}
