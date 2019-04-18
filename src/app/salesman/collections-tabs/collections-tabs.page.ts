import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { LoadingController, Events, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections-tabs',
  templateUrl: './collections-tabs.page.html',
  styleUrls: ['./collections-tabs.page.scss'],
})
export class CollectionsTabsPage implements OnInit {

  header = JSON.parse(localStorage.getItem('CollectionsHeader'));
  banks: any;

  constructor(private api: DataService,
    private loadingCtrl: LoadingController,
    private fakeApi: FakeApiService,
    private router: Router,
    private events: Events,
    private platform: Platform
  ) { }

  ngOnInit() {

  }

  uploadCollection() {

    const data = JSON.parse(localStorage.getItem('CollectionsHeader'));

    let savedCollections: any;
    if (!localStorage.getItem('savedCollections')) {
      savedCollections = [];
    } else {
      savedCollections = JSON.parse(localStorage.getItem('savedCollections'));
    }
    savedCollections.push(data);
    localStorage.setItem('savedCollections', JSON.stringify(savedCollections));

    this.events.publish('Collection:updated', 1, Date.now());
    localStorage.setItem('CollectionsHeader', '');

    if (this.api.networkStatus === 'Connected') {

      this.api.uploadCollections(data).then((res: any) => {
        console.log(res.Data);

        this.api.updateDataViaNotification({
          Id: res.Data.RV_ID,
          Flag: 'Collection',
          CompanyID: 1,
          StatusID: 1
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {
              this.fakeApi.setCollectionsList(element)
                .then(responce => {
                  console.log(responce);
                  let a = JSON.parse(localStorage.getItem('savedCollections'));
                  a.shift();
                  localStorage.setItem('savedCollections', JSON.stringify(a));
                  this.events.publish('Collection:updated', 1, Date.now());
                })
                .catch(err => {
                  console.log(err);
                });
            });
          }
        }).catch(exp => {
          console.log(exp);
        });

      }, err => {
        console.log(err);
      });

      this.router.navigate(['/collections']);

    } else if (this.api.networkStatus === 'Disconnected') {
      this.router.navigate(['/collections']);
    }

  }

}
