import { Injectable } from '@angular/core';
import { FinanceTableItem } from 'src/app/interfaces/finance.table.item';

@Injectable()
export class FinanceTableService {

  finances: FinanceTableItem[] = [
    {id: 1, partnerName: 'name', amount: 500, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'},
    {id: 2, partnerName: 'name', amount: 500, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'},
    {id: 3, partnerName: 'name', amount: -100, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'},
    {id: 4, partnerName: 'name', amount: 500, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'},
    {id: 5, partnerName: 'name', amount: -100, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'},
    {id: 6, partnerName: 'name', amount: 500, date_of_deadline:'2018-12-10', date_of_completion : '2018-12-10', description: 'Leírás'}
  ];

  getFinances() {
    return this.finances.slice()
  }

  addFinance(finance : FinanceTableItem) {
    this.finances.push(finance)
  }


}