import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   // console.log(localStorage.getItem('ItemId'));
  }

  hello() {
    console.log('Hello');
  }

}
