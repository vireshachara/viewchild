import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templaterefvaraible',
  templateUrl: './templaterefvaraible.component.html',
  styleUrls: ['./templaterefvaraible.component.scss']
})
export class TemplaterefvaraibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Example #2
  sayHello(inputEl : HTMLInputElement){
    alert('Hello '+ inputEl.value)
  }

  //Example #3
  selectedCustomer: any;

  customers  = [
    {customerNo: 1, name: 'Veeresh', address : '', city:'singapur', country:'INDIA'},
    {customerNo: 2, name: 'Janu', address : '', city:'singapur', country:'AUSTRAILIA'},
    {customerNo: 3, name: 'Shashi', address : '', city:'Mantralaya', country:'INDIA'},
    {customerNo: 4, name: 'Anand', address : '', city:'Karatagi', country:'AMERICA'},
    {customerNo: 5, name: 'Srikanth', address : '', city:'singapur', country:'INDIA'},
  ]

}
