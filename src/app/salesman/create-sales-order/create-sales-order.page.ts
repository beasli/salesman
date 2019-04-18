import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { LoadingController, Events } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-sales-order',
  templateUrl: './create-sales-order.page.html',
  styleUrls: ['./create-sales-order.page.scss'],
})
export class CreateSalesOrderPage implements OnInit {

  loading: any;
  current_date = new Date();
  date = this.datePipe.transform(this.current_date, 'yyyy-MM-dd');

  constructor(private api: DataService,
    private loadingCtrl: LoadingController,
    private fakeApi: FakeApiService,
    private router: Router,
    public events: Events,
    public dataApi: DataService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    console.log(this.api.networkStatus);
  }

  async uploadSalesOrder() {

    const items = JSON.parse(localStorage.getItem('Cart'));
    const client = JSON.parse(localStorage.getItem('Client'));
    const itemArr = [];
    items.forEach(element => {
      const temp = {
        Id: element.item.ItemID,
        ItemClassId: 0,
        ArName: element.item.ArName,
        EnName: element.item.EnName,
        Description: element.item.Description,
        Price: (!element.item.Amount) ? element.item.Price : element.item.Amount,
        Quantity: element.Qty,
        Amount: (!element.item.Amount) ? element.item.Price * element.Qty : element.item.Amount * element.Qty,
        Total: (!element.item.Amount) ? element.item.Price * element.Qty : element.item.Amount * element.Qty,
        Discount: 0,
        WarehouseID: element.item.WarehouseID,
        UnitID: element.item.UnitID
      };
      itemArr.push(temp);
    });

    const data = {
      AccID: client.AccID,
      Amount: this.totalAmaount(itemArr),
      ArAccount: client.ArName,
      CompanyID: 1,
      Date: this.date + 'T00:00:00',
      EnAccount: client.EnName,
      EntryBy: 'ERPEASYAPP',
      InertvalID: 2017,
      Note: null,
      Status: '',
      VoucherType: 7,
      TotalPreDiscount: 0,
      Item: itemArr,
      Header: JSON.parse(localStorage.getItem('CartHeader'))
    };

    console.log(data);

    let savedOrders: any;
    if (!localStorage.getItem('savedOrders')) {
      savedOrders = [];
    } else {
      savedOrders = JSON.parse(localStorage.getItem('savedOrders'));
    }
    savedOrders.push(data);
    localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
    this.events.publish('SalesorderUpdated:updated', 1, Date.now());
    localStorage.setItem('CartHeader', '');
    localStorage.setItem('Cart', '');
    this.events.publish('cart:updated', 1, Date.now());

    if (this.api.networkStatus === 'Connected') {

      this.api.uploadSalesOrder(data).then((res: any) => {
        console.log(res.Data);
        this.dataApi.updateDataViaNotification({
          Id: res.Data.VoucherID,
          Flag: 'Order',
          CompanyID: 1,
          Voucher_TypeID: 7,
          StatusID: 2
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {
              console.log('Created');
              this.fakeApi.setSalesOrder(element)
                .then(responce => {
                  console.log(responce);
                  const a = JSON.parse(localStorage.getItem('savedOrders'));
                  a.shift();
                  localStorage.setItem('savedOrders', JSON.stringify(a));
                  this.events.publish('SalesorderUpdated:updated', 1, Date.now());
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

      this.router.navigate(['/sales-order-list']);

    } else if (this.api.networkStatus === 'Disconnected') {
      this.router.navigate(['/sales-order-list']);
    }

  }

  totalAmaount(items) {
    let amt = 0;
    for (const k of items) {
      amt += k.Amount;
    }
    return amt;
  }

}
