import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events } from '@ionic/angular';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage implements OnInit {

  sortID: any;
  items: any;
  offset: any = 0;
  savedCollections: any;
  constructor(
              private route: ActivatedRoute,
              private fakeApi: FakeApiService,
              private router: Router,
              private platform: Platform,
              public events: Events
              ) {
                events.subscribe('Collection:updated', (user, time) => {
                  if (localStorage.getItem('savedCollections')) {
                    this.savedCollections = JSON.parse(localStorage.getItem('savedCollections'));
                  }
                  this.ngOnInit();
                });
               }

    ionViewDidEnter() {}

    ngOnInit() {
      if (localStorage.getItem('savedCollections')) {
        this.savedCollections = JSON.parse(localStorage.getItem('savedCollections'));
      }
      const userType = localStorage.getItem('LoginAs');
      const Salesman = JSON.parse(localStorage.getItem('Salesman'));
      let condition: any;
      if (userType === 'Supervisor') {
        condition = 'Collections.SupervisorID = ' + Salesman.AccId + ' OR Collections.EmployeeID = ' + Salesman.AccId;
      } else if (userType === 'Employee') {
        condition = 'Collections.EmployeeID = ' + Salesman.AccId;
      }
      this.offset = 0;
      this.fakeApi.getCollectionsList(this.offset, condition).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
          this.items = [];
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.items.push(data.res.rows.item(i));
                }
              }
        } else {
          this.items = Object.values(data.res.rows);
        }

        if (data.res.rows.length === 10) {
          this.offset += 10;
        } else {
          this.offset += data.res.rows.length;
        }
        console.log(this.items);
      }).catch(err => {
        console.log(err);
      });
  }

  loadData(event) {
    const userType = localStorage.getItem('LoginAs');
    const Salesman = JSON.parse(localStorage.getItem('Salesman'));
    let condition: any;
    if (userType === 'Supervisor') {
      condition = 'Collections.SupervisorID = ' + Salesman.AccId + ' OR Collections.EmployeeID = ' + Salesman.AccId;
    } else if (userType === 'Employee') {
      condition = 'Collections.EmployeeID = ' + Salesman.AccId;
    }
    this.fakeApi.getCollectionsList(this.offset, condition).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.items.push(data.res.rows.item(i));
                }
              } else {
                event.target.disabled = true;
              }
        } else {
          const items = Object.values(data.res.rows);
          if (items.length > 0) {
            items.forEach(ele => {
              this.items.push(ele);
            });
          } else {
            event.target.disabled = true;
          }
        }

        this.offset += 10;
        console.log('Done');
        event.target.complete();
        console.log(this.items);
      }).catch(err => {
        event.target.disabled = true;
        console.log(err);
      });
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
  }

  openDetail(ItemId) {
    localStorage.setItem('Collection', JSON.stringify(ItemId));
    this.router.navigate(['/collections-detail']);
  }

  createSalesOrder() {
    // localStorage.setItem('SalesOrder', JSON.stringify(ItemId));
   // collections-tabs
    this.router.navigate(['/clients', 'add-clns']);
  }

  invoiceTotal(item) {
    let price = 0;
    item = JSON.parse(item);
    item.forEach(element => {
      price += element.Price;
    });
    return price;
  }



}
