import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-detail',
  templateUrl: './collections-detail.page.html',
  styleUrls: ['./collections-detail.page.scss'],
})
export class CollectionsDetailPage implements OnInit {

  header: any;
  constructor() { }

  ngOnInit() {
    this.header = JSON.parse(localStorage.getItem('Collection'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    this.header.Cash = JSON.parse(this.header.Cash);
    this.header.Cheque = JSON.parse(this.header.Cheque);
    console.log(this.header);
  }

}
