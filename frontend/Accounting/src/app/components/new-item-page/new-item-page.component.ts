import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinanceTableItem} from '../../interfaces/finance.table.item'
import { FinanceTableService } from 'src/app/services/backend-services/finance.table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.css']
})
export class NewItemPageComponent implements OnInit {

  itemForm : FormGroup;  
  finance : FinanceTableItem;

  constructor(
    private fb : FormBuilder,
    private financeService : FinanceTableService,
    private router : Router) { }

  ngOnInit() {    
    this.itemForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern("[a-zA-ZáéíöóöőúűÁÉÍÓÖŐÚÜŰ ]+") 
      ]],
      amount: ['', [
        Validators.required,
        Validators.pattern("^[1-9]+[0-9]*$")
      ]],
      agree : [false, [
        Validators.requiredTrue
      ]],
      dateOfDeadline : ['', [
        Validators.required
      ]],
      dateOfCompletion : ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required,
        Validators.pattern("[a-zA-ZáéíöóöőúűÁÉÍÓÖŐÚÜŰ ]+")  
      ]]

    });
  }

  get name() {
      return this.itemForm.get('name');
  }

  get amount() {
    return this.itemForm.get('amount');
  }

  get agree() {
    return this.itemForm.get('agree');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get dateOfDeadline() {
    return this.itemForm.get('dateOfDeadline')
  }

  get dateOfCompletion() {
    return this.itemForm.get('dateOfCompletion')
  }

  insertNewItem() {
    this.finance = {     
      partnerName: this.itemForm.get('name').value,
      amount: this.itemForm.get('amount').value, 
      dateOfDeadline:this.itemForm.get('dateOfDeadline').value, 
      dateOfCompletion : this.itemForm.get('dateOfCompletion').value, 
      description: this.itemForm.get('description').value
    }

    this.financeService.addFinance(this.finance)

    this.financeService.refreshFinances().then((response : any) => {
      this.financeService.setFinances(response)
      this.router.navigateByUrl('/finance-page')
    })

  }
}
