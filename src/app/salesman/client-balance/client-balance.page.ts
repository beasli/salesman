import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-client-balance',
  templateUrl: './client-balance.page.html',
  styleUrls: ['./client-balance.page.scss'],
})
export class ClientBalancePage implements OnInit {

  clients: any;

  constructor(
              private fakeApi: FakeApiService,
              private platform: Platform
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.clients = JSON.parse(localStorage.getItem('Client'));
    // this.clients = JSON.parse(this.clients.Balance);
   // this.clients.AccID = 4;
   console.log(this.clients.AccID);
    this.fakeApi.getClientBalance(this.clients.AccID).then((data: any) => {
      console.log(data.res.rows.item(0));
      if (this.platform.is('cordova')) {
        this.clients = [];
            if (data.res.rows.length > 0) {
              for (let i = 0; i < data.res.rows.length; i++) {
                this.clients.push(data.res.rows.item(i));
              }
            }
         //   this.offset += 10;
      } else {
        this.clients = Object.values(data.res.rows);
      }
      console.log(this.clients);
    }).catch(err => {
      console.log(err);
    });
    console.log(this.clients);
  }

}
