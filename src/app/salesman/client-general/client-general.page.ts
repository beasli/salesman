import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-client-general',
  templateUrl: './client-general.page.html',
  styleUrls: ['./client-general.page.scss'],
})
export class ClientGeneralPage implements OnInit {

  client: any;
  sort: any;

  constructor(
    private fakeApi: FakeApiService,
    private events: Events
  ) {
    this.events.subscribe('Client:updated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.client = JSON.parse(localStorage.getItem('Client'));
    });
   }

  ngOnInit() {

  }

  ionViewWillEnter() {
    console.log('tmkb');
    this.client = JSON.parse(localStorage.getItem('Client'));
    console.log(this.client);
    this.fakeApi.getClientSort(this.client.SortID).then((data: any) => {
      console.log(data.res.rows.item(0));
      this.sort = data.res.rows.item(0);
    }).catch(err => {
      console.log(err);
    });
    console.log(this.client);
  }

}
