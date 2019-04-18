import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesorder-header',
  templateUrl: './salesorder-header.page.html',
  styleUrls: ['./salesorder-header.page.scss'],
})
export class SalesorderHeaderPage implements OnInit {
  header: any;
  Salesman: any;
  constructor() { }

  ngOnInit() {
    this.header = JSON.parse(localStorage.getItem('SalesOrder'));
    this.Salesman = JSON.parse(localStorage.getItem('Salesman'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
    this.header = JSON.parse(this.header.Header);
    console.log(this.header);
  }

}
