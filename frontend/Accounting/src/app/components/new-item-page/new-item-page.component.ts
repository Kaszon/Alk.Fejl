import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinanceTableItem} from '../../interfaces/finance.table.item'
import { FinanceTableService } from 'src/app/services/backend-services/finance.table.service';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/backend-services/partner.service';
import { ActorService } from 'src/app/services/backend-services/actor.service';
import { Actor } from 'src/app/interfaces/actor.interface';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.css']
})
export class NewItemPageComponent implements OnInit {

  itemForm : FormGroup;  
  finance : FinanceTableItem;
  partnerNames : string[]

  constructor(
    private fb : FormBuilder,
    private financeService : FinanceTableService,
    private partnerService : PartnerService,
    private actorService : ActorService,
    private router : Router) { }

  ngOnInit() {    

    this.partnerNames = this.partnerService.getPartnerNames()

    this.itemForm = this.fb.group({
      name: ['', [
        Validators.required 
      ]],
      amount: ['', [
        Validators.required,
        Validators.pattern("^(-)?[1-9]+[0-9]*$")
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

    let actor = JSON.parse(window.sessionStorage.getItem('user'));

    this.finance = {  
      actorEmail : actor['email'],
      partnerName: this.itemForm.get('name').value,
      amount: this.itemForm.get('amount').value, 
      dateOfDeadline:this.itemForm.get('dateOfDeadline').value, 
      dateOfCompletion : this.itemForm.get('dateOfCompletion').value, 
      description: this.itemForm.get('description').value
    }

    this.financeService.addFinance(this.finance).then(() => {
      this.financeService.refreshFinances().then((response : any) => {
        this.financeService.setFinances(response)

        this.actorService.updateBalance(actor['id'],this.finance.amount).then((actor : Actor)=>{     
          window.sessionStorage.setItem('user',JSON.stringify(actor))     
          this.router.navigateByUrl('/finance-table')
        })        
        
      })
    })
  }
}
