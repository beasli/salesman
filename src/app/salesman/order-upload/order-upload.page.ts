import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-order-upload',
  templateUrl: './order-upload.page.html',
  styleUrls: ['./order-upload.page.scss'],
})
export class OrderUploadPage implements OnInit {

  sortID: any;
  items: any;
  offset: any = 0;
  search = false;

  constructor(
    private route: ActivatedRoute,
    private fakeApi: FakeApiService,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.offset = 0;
    const userType = localStorage.getItem('LoginAs');
      const Salesman = JSON.parse(localStorage.getItem('Salesman'));
      let condition0: any;
      if (userType === 'Supervisor') {
        condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
      } else if (userType === 'Employee') {
        condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
      }
    this.fakeApi.getSalesOrder(this.offset, condition0).then((data: any) => {
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
  }


  loadData(event) {
    const userType = localStorage.getItem('LoginAs');
      const Salesman = JSON.parse(localStorage.getItem('Salesman'));
      let condition0: any;
      if (userType === 'Supervisor') {
        condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
      } else if (userType === 'Employee') {
        condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending" AND UploadStatusID  in (99, 2)';
      }
      this.fakeApi.getSalesOrder(this.offset, condition0).then((data: any) => {
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
    localStorage.setItem('SalesOrder', JSON.stringify(ItemId));
    this.router.navigate(['/sales-order-detail']);
  }

  invoiceTotal(item) {
    let price = 0;
    item = JSON.parse(item);
    item.forEach(element => {
      price += element.Price;
    });
    return price;
  }

  toggleSearchBar() {
    this.search = !this.search;
    if (!this.search) {
      this.ngOnInit();
    }
  }

  searchItem(evt) {
    console.log(evt.detail.value);
    if (!evt.detail.value) {
      this.ngOnInit();
    } else {
      const userType = localStorage.getItem('LoginAs');
    const Salesman = JSON.parse(localStorage.getItem('Salesman'));
    let condition0: any;
    if (userType === 'Supervisor') {
      // tslint:disable-next-line:max-line-length
      condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2) AND ArAccount LIKE "%' + evt.detail.value + '%"';
    } else if (userType === 'Employee') {
      // tslint:disable-next-line:max-line-length
      condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2) AND ArAccount LIKE "%' + evt.detail.value + '%"';
    }
      this.fakeApi.getSalesOrderBySearchKeyword(condition0).then( (data: any) => {
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


  Currency(hdr) {
    const crny =  JSON.parse(hdr);
    return crny.Currency;
  }

}
