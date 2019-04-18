import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  sortID: any;
  items: any;
  offset: any = 0;

  searchResult = false;
  keyword: any;

  constructor(
              private route: ActivatedRoute,
              private fakeApi: FakeApiService,
              private router: Router,
              private platform: Platform,
              private barcodeScanner: BarcodeScanner
              ) { }

  ngOnInit() {
    this.searchResult = false;
    this.offset = 0;
    this.route.params.subscribe(params => {
      this.sortID = params['SortID'];
      this.fakeApi.getItemsBySortID(this.sortID, this.offset).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
          this.items = [];
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.items.push(data.res.rows.item(i));
                }
              }
              this.offset += 10;
        } else {
          this.items = Object.values(data.res.rows);
        }
        console.log(this.items);
      }).catch(err => {
        console.log(err);
      });
    });
  }

  loadData(event) {
      this.fakeApi.getItemsBySortID(this.sortID, this.offset).then((data: any) => {
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
    this.fakeApi.getItemsBySearchKeyword('%' + this.keyword + '%', this.offset).then((data: any) => {
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

  openItemGeneralDetail(ItemId) {
    localStorage.setItem('Item', JSON.stringify(ItemId));
    this.router.navigate(['/item-detail']);
  }

  searchItem(evt) {
    console.log(evt.target.value);
    this.keyword = evt.target.value;
    if (!evt.target.value) {
      this.ngOnInit();
    } else {
      this.searchResult = true;
      this.fakeApi.getItemsBySearchKeyword('%' + evt.target.value + '%', 0).then( (data: any) => { 
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
      }).catch(exp => {
        console.log('exp', exp);
      });
    }
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

}
