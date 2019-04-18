import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-detail-cash',
  templateUrl: './collections-detail-cash.page.html',
  styleUrls: ['./collections-detail-cash.page.scss'],
})
export class CollectionsDetailCashPage implements OnInit {

  header: any;

  constructor() {
  //  this.header = JSON.parse(this.header.Cash);
  }

  ngOnInit() {
    this.header = JSON.parse(localStorage.getItem('Collection'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    this.header.Cash = JSON.parse(this.header.Cash);
    this.header.Cheque = JSON.parse(this.header.Cheque);
    console.log(this.header);
  }

}
