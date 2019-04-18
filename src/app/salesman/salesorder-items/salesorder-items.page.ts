import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesorder-items',
  templateUrl: './salesorder-items.page.html',
  styleUrls: ['./salesorder-items.page.scss'],
})
export class SalesorderItemsPage implements OnInit {
  items: any;
  header: any;
  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('SalesOrder'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
   this.header = JSON.parse(this.items.Header);
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
