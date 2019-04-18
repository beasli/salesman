import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events } from '@ionic/angular';

@Component({
  selector: 'app-collections-create',
  templateUrl: './collections-create.page.html',
  styleUrls: ['./collections-create.page.scss'],
})
export class CollectionsCreatePage implements OnInit {

  Employee = JSON.parse(localStorage.getItem('Salesman'));
  Currency = JSON.parse(localStorage.getItem('Currency'));
  header = JSON.parse(localStorage.getItem('CollectionsHeader'));
  client = JSON.parse(localStorage.getItem('Client'));
  Clients: any;

  Cash: any = {};
  Cheque: any = {};

  constructor(
    private fakeApi: FakeApiService,
    private platform: Platform,
    private events: Events) {
      events.subscribe('Collection:updated', (user, time) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.header = (localStorage.getItem('CollectionsHeader')) ? JSON.parse(localStorage.getItem('CollectionsHeader')) : [];
        const cash = this.header.Cash;
        let cashDebt = 0;
        let cashEqualDebt = 0;
        cash.forEach(element => {
          cashDebt += (+element.Debit);
          cashEqualDebt += (+element.Equal_Debit);
        });
        const cheque = this.header.Cheque;
        let chequeDebt = 0;
        let chequeEqualDebt = 0;
        cheque.forEach(element => {
          chequeDebt += (+element.Debit);
          chequeEqualDebt += (+element.Equal_Debit);
        });
        this.header.RV_Amount = (+cashDebt) + (+chequeDebt);
        this.header.RV_Equal_Amount = (+cashEqualDebt) + (+chequeEqualDebt);
        localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
      });

    }

  ngOnInit() {
  }

  submit() {
    const a =  [this.Cash];
    this.header.Cash.push(a);
    this.header.Cheque.push(this.Cheque);
    console.log(this.header);
  }

  ionViewWillEnter() {

    const userType = localStorage.getItem('LoginAs');
    const Salesman = JSON.parse(localStorage.getItem('Salesman'));
    let condition: any;
    if (userType === 'Supervisor') {
       condition = 'SupervisorID = ' + Salesman.AccId;
    } else if (userType === 'Employee') {
      condition = 'EmployeeID = ' + Salesman.AccId;
    }

    this.fakeApi.getClientList(0, condition).then((data: any) => {
      console.log(data.res.rows);
      if (this.platform.is('cordova')) {
        console.log(data.res.rows.item(0));
        this.Clients = [];
            if (data.res.rows.length > 0) {
              for (let i = 0; i < data.res.rows.length; i++) {
                this.Clients.push(data.res.rows.item(i));
              }
            }
      } else {
        this.Clients = Object.values(data.res.rows);
      }
    }).catch(err => {
      console.log(err);
    });
}

}
