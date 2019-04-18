import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.page.html',
  styleUrls: ['./item-history.page.scss'],
})
export class ItemHistoryPage implements OnInit {

  item: any;
  offset = 0;
  status = 'Posted';
  constructor(
    private fakeApi: FakeApiService,
    private platform: Platform) { }

  ngOnInit() {
    console.log('fejje');
    this.item = JSON.parse(localStorage.getItem('Item'));
    this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === this.item.SortID).ArName;
   // this.item = JSON.parse(this.item.History);
    console.log(this.item);

    this.offset = 0;
      this.fakeApi.getItemHistory(this.item.ItemID, this.status, this.offset).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
          this.item = [];
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.item.push(data.res.rows.item(i));
                }
              }
              this.offset += 10;
        } else {
          this.item = Object.values(data.res.rows);
        }
        console.log(this.item);
      }).catch(err => {
        console.log(err);
      });
  }

}
