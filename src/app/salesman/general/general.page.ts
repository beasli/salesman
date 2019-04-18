import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

  item: any;

  constructor(
    private fakeApi: FakeApiService
  ) { }

  ngOnInit() {
    this.item = JSON.parse(localStorage.getItem('Item'));
    this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === this.item.SortID).ArName;
    console.log(this.item);
    console.log(JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === this.item.SortID));
  }

}
