import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-partner-page',
  templateUrl: './new-partner-page.component.html',
  styleUrls: ['./new-partner-page.component.scss']
})
export class NewPartnerPageComponent implements OnInit {

  partnerForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {    
    this.partnerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern("[a-zA-ZáéíöóöőúűÁÉÍÓÖŐÚÜŰ ]+")        
      ]],
      city: ['', [
        Validators.required,
        Validators.pattern("[a-zA-ZáéíöóöőúűÁÉÍÓÖŐÚÜŰ ]+")    
      ]],
      address : ['', [
        Validators.required
      ]],
      taxNum : ['', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      agree : [false, [
        Validators.requiredTrue
      ]]

    });
  }

  get name() {
      return this.partnerForm.get('name');
  }

  get city() {
    return this.partnerForm.get('city');
  }

  get address() {
    return this.partnerForm.get('address');
  }

  get taxNum() {
    return this.partnerForm.get('taxNum');
  }

  get agree() {
    return this.partnerForm.get('agree');
  }
}
