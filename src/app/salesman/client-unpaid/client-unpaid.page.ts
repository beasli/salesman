import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-unpaid',
  templateUrl: './client-unpaid.page.html',
  styleUrls: ['./client-unpaid.page.scss'],
})
export class ClientUnpaidPage implements OnInit {

  clients: any;

  constructor() { }

  ngOnInit() {
    this.clients = JSON.parse(localStorage.getItem('Client'));
    this.clients = JSON.parse(this.clients.UnPaid);
    console.log(this.clients);
  }

}
