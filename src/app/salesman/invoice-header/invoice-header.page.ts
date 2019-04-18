import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.page.html',
  styleUrls: ['./invoice-header.page.scss'],
})
export class InvoiceHeaderPage implements OnInit {

  header: any;
  client: any;
  constructor() { }

  ngOnInit() {
    this.header = JSON.parse(localStorage.getItem('Invoice'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    this.client = this.header.ClientDetail;
    console.log(this.header);
  }

}
