
import { Component, OnInit, Host, ViewChild } from '@angular/core';

@Component({
  selector: 'new-card-form',
  templateUrl: './new-card.component.html'
})
export class NewCardComponent implements OnInit {
  form: any;
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}