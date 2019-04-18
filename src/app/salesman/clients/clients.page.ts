import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: any;
  offset: any = 0;
  search = false;
  type: any;
  current_date = new Date();
  date = this.datePipe.transform(this.current_date, 'yyyy-MM-dd');

  constructor(
    private router: Router,
    private fakeApi: FakeApiService,
    private platform: Platform,
    private route: ActivatedRoute,
    private events: Events,
    private datePipe: DatePipe
  ) { }

   compare(a, b) {
    if (a.last_nom < b.last_nom) {

      return -1;
    } if (a.last_nom > b.last_nom) {
      return 1;
    }
    return 0;
  }

  ionViewWillEnter() {
    this.route.params.subscribe(params => {
      // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
      // for example extract the id..
      console.log(params['type']); // (+) converts string 'id' to a number
      this.type = params['type'];
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // const objs = [{'name' : 'Radhika', 'age': 20}, {'name' : 'Jessica', 'age': 20}, {'name' : 'Anu', 'age': 20}, {'name' : 'Manu', 'age': 20}];
    // console.log(objs);
    // objs.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    const userType = localStorage.getItem('LoginAs');
    const Salesman = JSON.parse(localStorage.getItem('Salesman'));
    let condition: any;
    if (userType === 'Supervisor') {
       condition = 'SupervisorID = ' + Salesman.AccId;
    } else if (userType === 'Employee') {
      condition = 'EmployeeID = ' + Salesman.AccId;
    }

    this.fakeApi.getClientList(this.offset, condition).then((data: any) => {
      console.log(data.res.rows.item(0));
      if (this.platform.is('cordova')) {
        this.clients = [];
            if (data.res.rows.length > 0) {
              for (let i = 0; i < data.res.rows.length; i++) {
                this.clients.push(data.res.rows.item(i));
              }
            }
      } else {
        this.clients = Object.values(data.res.rows);
      }
      this.offset += 10;
      console.log(this.clients);
    }).catch(err => {
      console.log(err);
    });
  }

  loadData(event) {
    const userType = localStorage.getItem('LoginAs');
    const Salesman = JSON.parse(localStorage.getItem('Salesman'));
    let condition: any;
    if (userType === 'Supervisor') {
       condition = 'SupervisorID = ' + Salesman.AccId;
    } else if (userType === 'Employee') {
      condition = 'EmployeeID = ' + Salesman.AccId;
    }
    this.fakeApi.getClientList(this.offset, condition).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.clients.push(data.res.rows.item(i));
                }
              } else {
                event.target.disabled = true;
              }
        } else {
          const items = Object.values(data.res.rows);
          if (items.length > 0) {
            items.forEach(ele => {
              this.clients.push(ele);
            });
          } else {
            event.target.disabled = true;
          }
        }

        this.offset += 10;
        console.log('Done');
        event.target.complete();
        console.log(this.clients);
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

  openClientDetail(client) {
    localStorage.setItem('Client', JSON.stringify(client));
    this.events.publish('Collection:updated', 1, Date.now());
    this.router.navigate(['/client-detail-tabs']);
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
      this.fakeApi.getClientListBySearchKeyword('%' + evt.detail.value + '%').then( (data: any) => {
        if (this.platform.is('cordova')) {
          this.clients = [];
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.clients.push(data.res.rows.item(i));
                }
              }
        } else {
          this.clients = Object.values(data.res.rows);
        }
      }).catch(exp => {
        console.log('exp', exp);
      });
    }
  }

  addClientToSalesOrder(client) {
    const userType = localStorage.getItem('LoginAs');
      const Salesman = JSON.parse(localStorage.getItem('Salesman'));
      let Supervisor: any = 0;
      let Employee: any = 0;
      if (userType === 'Supervisor') {
        Supervisor = Salesman.AccId;
      } else if (userType === 'Employee') {
        Employee = Salesman.AccId;
      }

   const header = {
      CreatedBy: 'ERPEASY',
      Agent: '',
      Rate: 1,
      DeliveryDate: '0001-01-01T00:00:00',
      EmailSentDate: '0001-01-01T00:00:00',
      BillingAddress: '',
      DeliveryAddress: null,
      Taxes: 0,
      Reference: null,
      ClientName: client.ArName,
      Comments: null,
      PrivateComment: null,
      Date: this.date + 'T00:00:00',
      Currency: '',
      CurrencyID: 1,
      CurrencyRate: 1,
      PaymentOption: null,
      EmployeeId: Employee,
      SupervisorId: Supervisor,
      StatusId: 1,
      RecordAddBy: 'ERPEASY'
    };
    localStorage.setItem('Client', JSON.stringify(client));
    localStorage.setItem('CartHeader', JSON.stringify(header));
    localStorage.setItem('Cart', JSON.stringify([]));
    this.events.publish('cart:updated', 1, Date.now());
    this.router.navigate(['/create-sales-order']);
  }

  addClientToCollection(client) {
    const userType = localStorage.getItem('LoginAs');
      const Salesman = JSON.parse(localStorage.getItem('Salesman'));
      let Supervisor: any = 0;
      let Employee: any = 0;
      if (userType === 'Supervisor') {
        Supervisor = Salesman.AccId;
      } else if (userType === 'Employee') {
        Employee = Salesman.AccId;
      }

    const header = {
    EmployeeID: Employee,
    // SupervisorId: Supervisor,
    SupervisorId: 14344,
    CompanyID: 1,
    IntervalID: 2017,
    RV_Details: null,
    CurrencyID: 1,
    ClientName: client.ArName,
    ClientID: client.AccID,
    PaymentOption: 0,
    VoucherID: 0,
    StatusId: 1,
    RV_Date: this.date,
    RV_Amount: 0,
    RV_Equal_Amount: 0,
    EntryBy: Salesman.ArName,
    CreatedOn: this.date,
    TheRate: 1,
    Note: null,
    Refrence1: null,
    PostDate: this.date,
    AccId: client.AccID,
    RecordUpdateBy: null,
    Cash: [],
    Cheque: []
  };
  console.log(header);
    localStorage.setItem('Client', JSON.stringify(client));
     localStorage.setItem('CollectionsHeader', JSON.stringify(header));
     this.events.publish('Collection:updated', 1, Date.now());
     this.router.navigate(['/collections-tabs']);
   }

  createClient() {
    console.log('createClient');
    this.router.navigate(['/client-create']);
  }
}
