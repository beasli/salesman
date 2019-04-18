import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-detail-header',
  templateUrl: './collections-detail-header.page.html',
  styleUrls: ['./collections-detail-header.page.scss'],
})
export class CollectionsDetailHeaderPage implements OnInit {


  header = JSON.parse(localStorage.getItem('Collection'));

  constructor() { }

  ngOnInit() {
    console.log(this.header);
  }

}
