import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events, ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {
  modal: any;
  @ViewChild('input') myInput ;
  sortID: any;
  items: any;
  offset: any = 0;
  cart: any;
  search = false;
  SerialNo: any;
  ScannerSerialNo: any;
  interval: any;
  cartTotal: any = 0;
  client: any = 0;

  searchResult = false;
  keyword: any;

  constructor(
              private route: ActivatedRoute,
              private fakeApi: FakeApiService,
              private router: Router,
              public events: Events,
              private platform: Platform,
              private barcodeScanner: BarcodeScanner,
              public modalController: ModalController
              ) {
                this.cart = (localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];
                events.subscribe('cart:updated', (user, time) => {
                  // user and time are the same arguments passed in `events.publish(user, time)`
                  this.getCartTotal();
                });
               }
               ngOnInit() {
                 this.ionViewWillEnter();
                 this.getCartTotal();
               }

               async presentModal(item) {
                this.modal = await this.modalController.create({
                  component: ProductModalComponent,
                  componentProps: { value: item, cart: this.cart },
                  cssClass: 'my-custom-modal-css'
                });
                return await this.modal.present();
              }


  ionViewWillEnter() {
    this.searchResult = false;
    this.offset = 0;
    this.client = (localStorage.getItem('Client')) ? JSON.parse(localStorage.getItem('Client')) : [];
    this.cart = (localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];
    console.log(this.client.AccID);
    this.route.params.subscribe(params => {
      this.sortID = params['SortID'];
    //  this.fakeApi.getItemsBySortID(this.sortID, this.offset).then((data: any) => {
      this.fakeApi.getItemsBySortIDWithSpecialPrice(this.sortID, this.client.AccID, this.offset)
      .then((data: any) => {
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
        this.offset += 10;
        console.log(this.items);
      }).catch(err => {
        console.log(err);
      });
    });
  }

  loadData(event) {
    console.log(this.sortID + ' ' + this.client.AccID + ' ' + this.offset);
   //   this.fakeApi.getItemsBySortID(this.sortID, this.offset).then((data: any) => {
    this.fakeApi.getItemsBySortIDWithSpecialPrice(this.sortID, this.client.AccID, this.offset).then((data: any) => {
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
        console.log(err);
        event.target.disabled = true;
      });
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
  }

  loadSearchData(event) {
    this.fakeApi.getItemsBySearchKeywordWithSpecialPrice('%' + this.keyword + '%', this.client.AccID, this.offset).then((data: any) => {
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
      console.log(err);
      event.target.disabled = true;
    });
    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    // if (data.length == 1000) {
    //   event.target.disabled = true;
    // }
}

  // Depricated
  addToCart(item, qty) {
    console.log(this.cart.find(x => x.ItemID === item.ItemID));
    if (this.cart.find(x => x.ItemID === item.ItemID)) {
      this.cart.find(x => x.ItemID === item.ItemID).Qty += qty;
      if (this.cart.find(x => x.ItemID === item.ItemID).Qty === 0) {
        const index = this.cart.indexOf(this.cart.find(x => x.ItemID === item.ItemID));
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    } else {
      this.cart.push({item: item, Qty: 1, ItemID: item.ItemID});
    }
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.events.publish('cart:updated', 1, Date.now());
    this.getCartTotal();
  }

  removeFromCart(item) {
    console.log(this.cart.find(x => x.ItemID === item.ItemID));

    if (this.cart.find(x => x.ItemID === item.ItemID)) {

      this.cart.find(x => x.ItemID === item.ItemID).Qty = 0;

      if (this.cart.find(x => x.ItemID === item.ItemID).Qty === 0) {
        const index = this.cart.indexOf(this.cart.find(x => x.ItemID === item.ItemID));
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    }
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.getCartTotal();
  }

  isInTheCart(itemId) {
     return (this.cart.find(x => x.ItemID === itemId)) ? true : false ;
    // return itemId ;
  }

  itemCountInCart(item) {
    if (this.cart.find(x => x.ItemID === item)) {
      return this.cart.find(x => x.ItemID === item).Qty;
    } else {
      return 0;
    }
  }

  goToSales() {
    this.router.navigate(['/create-sales-order']);
  }

  toggleSearchBar() {
    this.search = !this.search;
    if (!this.search) {
      this.ngOnInit();
    }
  }

  searchItem(evt) {
    console.log(evt.target.value);
    if (!evt.target.value) {
      this.ngOnInit();
    } else {
      this.fakeApi.getItemsBySearchKeywordWithSpecialPrice('%' + evt.target.value + '%', this.client.AccID, 0).then( (data: any) => {
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
        this.offset = 10;
      }).catch(exp => {
        console.log('exp', exp);
      });
    }
  }

  valuechange(item) {
    if (this.interval) {
      clearTimeout(this.interval);
    }

    this.interval = setTimeout(() => {
      console.log(this.SerialNo);
      this.SearchSerial(this.SerialNo);
      setTimeout(() => {
        this.myInput.setFocus();
      }, 1000);
    }, 500);
  }

  Scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      this.SearchSerial(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  SearchSerial(barcode) {
    if (!barcode) {
      this.ngOnInit();
    } else {
      this.fakeApi.getItemsByBarcode(barcode).then( (data: any) => {
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
      }).catch(exp => {
        console.log('exp', exp);
      });
    }
  }

  getCartTotal() {
    this.cartTotal = 0;
    console.log('cartTotal', this.cartTotal);
    this.cart.forEach(element => {
      if (element.item.Amount) {
        this.cartTotal +=  element.item.Amount * element.Qty;
      } else {
        this.cartTotal +=  element.item.Price * element.Qty;
      }
    });

    console.log('cartTotal', this.cartTotal);
  }

}
