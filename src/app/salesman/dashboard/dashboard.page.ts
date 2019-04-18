import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

   sub: any;
   Salesman: any;
   salesOrder: any;
   userType: any;
   orderUpload: any;
   invoices: any;
   Collections: any;
   Clients: any;

  constructor(
    private menuCtrl: MenuController,
    public platform: Platform,
    public alertController: AlertController,
    public fakeApi: FakeApiService
  ) {

    }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.userType = localStorage.getItem('LoginAs');
    this.Salesman = JSON.parse(localStorage.getItem('Salesman'));

    this.menuCtrl.enable(true);
    this.sub =  this.platform.backButton.subscribeWithPriority(9999, () => {
      this.presentAlertConfirm();
    });

    let condition0: any;
      if (this.userType === 'Supervisor') {
        condition0 = 'SupervisorID = ' + this.Salesman.AccId;
      } else if (this.userType === 'Employee') {
        condition0 = 'EmployeeID = ' + this.Salesman.AccId;
      }

     let condition = condition0 + ' AND EnglishStatus = "Not Posted"';


    this.fakeApi.getSalesSummary(condition).then( (data: any) => {
      this.salesOrder = data.res.rows.item(0);
      console.log(this.salesOrder);
    }).catch(exp => {
      console.log(exp);
    });

     condition = condition0 + ' AND EnglishStatus = "Posted - Pending" AND UploadStatusID  in (99,2)';

    this.fakeApi.getSalesSummary(condition).then( (data: any) => {
      this.orderUpload = data.res.rows.item(0);
      console.log(this.orderUpload);
    }).catch(exp => {
      console.log(exp);
    });

    condition = condition0 + ' AND StatusName = "Posted"';

    this.fakeApi.getInvoicesSummary(condition).then( (data: any) => {
      this.invoices = data.res.rows.item(0);
      console.log(this.invoices);
    }).catch(exp => {
      console.log(exp);
    });

    this.fakeApi.getCollectionsSummary(condition0).then( (data: any) => {
      this.Collections = data.res.rows.item(0);
      console.log(this.Collections);
    }).catch(exp => {
      console.log(exp);
    });

    this.fakeApi.getClientListSummary(condition0).then((data: any) => {
      this.Clients = data.res.rows.item(0);
      console.log(this.Clients);
    }).catch(exp => {
      console.log(exp);
    });
  }

  ionViewWillLeave() {
    if (this.sub) {
      this.sub.unsubscribe();
   }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Close App',
      message: 'Are You Really Want To Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

}
