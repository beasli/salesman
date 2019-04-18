import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-stock',
  templateUrl: './item-stock.page.html',
  styleUrls: ['./item-stock.page.scss'],
})
export class ItemStockPage implements OnInit {

  item: any;
  constructor() { }

  ngOnInit() {
    this.item = JSON.parse(localStorage.getItem('Item'));
    this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    console.log(this.item);
  }

}
