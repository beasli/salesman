import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.page.html',
  styleUrls: ['./invoice-items.page.scss'],
})
export class InvoiceItemsPage implements OnInit {

  items: any;
  invoice: any;
  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('Invoice'));
    this.invoice = this.items;
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    this.items = JSON.parse(this.items.Item);
    console.log(this.items);
  }

  totalAmaount(items) {
   let amt = 0;
    items.forEach(element => {
      amt += element.Amount;
    });
    return amt;
  }

}
