import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-client-spl-price',
  templateUrl: './client-spl-price.page.html',
  styleUrls: ['./client-spl-price.page.scss'],
})
export class ClientSplPricePage implements OnInit {

  client: any;
  clients: any;

  constructor(
    private fakeApi: FakeApiService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.client = JSON.parse(localStorage.getItem('Client'));
   // this.clients = JSON.parse(this.clients.SpecialPrice);
  //   console.log(this.clients);
  }

  ionViewWillEnter() {
    this.client = JSON.parse(localStorage.getItem('Client'));
    console.log(this.client);
    this.fakeApi.getSpecialPriceByAccID(this.client.AccID).then((data: any) => {
      if (data.res.rows.length > 0) {
        this.clients = [];
      }
      if (this.platform.is('cordova')) {
        if (data.res.rows.length > 0) {
          for (let i = 0; i < data.res.rows.length; i++) {
            this.clients.push(data.res.rows.item(i));
          }
        }
  } else {
    const items = Object.values(data.res.rows);
    if (items.length > 0) {
      items.forEach(ele => {
        this.clients.push(ele);
      });
    }
  }
  console.log(this.clients);
    }).catch(exp => {
      console.log(exp);
    });
  }

 // tslint:disable-next-line:max-line-length
 // SELECT ClientList.AccID, ClientList.GeneralPriceListID, SpecialPrice.* FROM ClientList LEFT JOIN SpecialPrice ON ClientList.GeneralPriceListID = SpecialPrice.GeneralPriceListID Where ClientList.AccID = 65

}
