import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogPage } from '../catalog/catalog.page';
import { ModalController, Events } from '@ionic/angular';

@Component({
  selector: 'app-salesorder-items-create',
  templateUrl: './salesorder-items-create.page.html',
  styleUrls: ['./salesorder-items-create.page.scss'],
})
export class SalesorderItemsCreatePage implements OnInit {

  items: any;
  Client = JSON.parse(localStorage.getItem('Client'));
  constructor(
              private router: Router,
              public events: Events
              ) {
    this.totalAmaount();
    events.subscribe('cart:updated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
      this.items = (JSON.parse(localStorage.getItem('Cart'))) ? JSON.parse(localStorage.getItem('Cart')) : [];
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    console.log('create order');
    // this.items = JSON.parse(localStorage.getItem('Cart'));
   // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
   // this.items = JSON.parse(this.items);
    console.log(this.items);
   // this.items = (JSON.parse(localStorage.getItem('Cart'))) ? JSON.parse(localStorage.getItem('Cart')) : [];
   if (localStorage.getItem('Cart')) {
    this.items = JSON.parse(localStorage.getItem('Cart'));
   } else {
     this.items = [];
   }
  }

  totalAmaount() {
   let amt = 0;
   // console.log(this.items);
   for (const k in this.items) {
    if (this.items.hasOwnProperty(k)) {
      if (this.items[k].item.Amount) {
        amt += this.items[k].item.Amount *  this.items[k].Qty;
      } else {
        amt += this.items[k].item.Price *  this.items[k].Qty;
      }

    }
  }
  return amt;
 // console.log(amt);
    // this.items.forEach(element => {
    //   console.log(element.item);
    //   // amt += element.item.Price * element.item.Qty;
    // });
  }

  async addItem() {
    this.router.navigate(['/catalog', 'add-to-cart']);
    // Create a modal using MyModalComponent with some initial data
    // const modal = await this.modalController.create({
    //   component: CatalogPage,
    //   // componentProps: {
    //   //   'prop1': value,
    //   //   'prop2': value2
    //   // }
    // });
    // return await modal.present();
  }

}
