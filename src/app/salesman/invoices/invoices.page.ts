import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  sortID: any;
  items: any;
  offset: any = 0;
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
    let condition: any;
    if (userType === 'Supervisor') {
      condition = '( SupervisorID = ' + Salesman.AccId + ' OR EmployeeID = ' + Salesman.AccId + ' ) AND  StatusName = "Posted"';
    } else if (userType === 'Employee') {
      condition = 'EmployeeID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
    }

      this.fakeApi.getInvoicesList(this.offset, condition).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
          this.items = [];
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  data.res.rows.item(i).ClientDetail = JSON.parse(data.res.rows.item(i).ClientDetail);
                  this.items.push(data.res.rows.item(i));
                }
              }
        } else {
          this.items = Object.values(data.res.rows);
          if (this.items.length > 0) {
            this.items.forEach((ele: any) => {
              ele.ClientDetail = JSON.parse(ele.ClientDetail);
            });
          }
        }
        this.offset += 10;
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
      condition = 'SupervisorID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
    } else if (userType === 'Employee') {
      condition = 'EmployeeID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
    }

    condition = 'StatusName = "Posted"';
      this.fakeApi.getInvoicesList(this.offset, condition).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  data.res.rows.item(i).ClientDetail = JSON.parse(data.res.rows.item(i).ClientDetail);
                  this.items.push(data.res.rows.item(i));
                }
              } else {
                event.target.disabled = true;
              }
        } else {
          const items = Object.values(data.res.rows);
          if (items.length > 0) {
            items.forEach((ele: any) => {
              ele.ClientDetail = JSON.parse(ele.ClientDetail);
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
    localStorage.setItem('Invoice', JSON.stringify(ItemId));
    this.router.navigate(['/invoice-detail']);
  }

  invoiceTotal(item) {
    let price = 0;
    item = JSON.parse(item);
    item.forEach(element => {
      price += element.Price;
    });
    return price;
  }

  getClientName(clnt) {
    clnt = JSON.parse(clnt);
    return clnt.ArName;
  }

}
