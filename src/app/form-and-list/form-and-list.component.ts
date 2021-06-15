import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-and-list',
  templateUrl: './form-and-list.component.html',
  styleUrls: ['./form-and-list.component.css']
})
export class FormAndListComponent implements OnInit {

  name = '';
  email = '';
  phone = '';
  dob = '';
  location = '';
  
  defaultCity = 'Mumbai';

  infos = [];
  new_ar = [];

  constructor() { }

  ngOnInit() {

  }

  addCustomer() {
    this.new_ar = [this.name, this.email, this.phone, this.location, this.dob];
    this.infos.push(this.new_ar);
    this.name = '';
    this.email = '';
    this.phone = '';
    this.location = '';
    this.dob = '';
  }

}
