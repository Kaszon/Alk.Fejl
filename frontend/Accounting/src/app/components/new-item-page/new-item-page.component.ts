import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.css']
})
export class NewItemPageComponent implements OnInit {

  itemForm : FormGroup;

  constructor(private fb : FormBuilder) { }

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
}
