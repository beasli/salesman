import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { DataService } from '../../service/api/data.service';
import { LoadingController, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.page.html',
  styleUrls: ['./client-create.page.scss'],
})
export class ClientCreatePage implements OnInit {
  salsman =  JSON.parse(localStorage.getItem('Salesman'));
  sorts: any = [];
  client = {
    CompanyID: 1,
    AccArName: '',
    VatNumber: '',
    ParentAccID: 1102,
    AccLevel: 4,
   // AccIDForUser: ,
    IsActive: 1,
    CurrencyID: 1,
    MultiCurrency: 1,
    CreatedBy: this.salsman.ArName,
    SortID: 1,
    Filter1: 0,
    Filter2: 0,
    Filter3: 0,
    Filter4: 0,
    Filter5: 0,
    PrintingName: '',
    VatStatus: 1,
    CityID: 2,
    Address: '',
    Tel: '',
    Fax: '',
    Mobile: '',
    Email: '',
    WebSite: '',
  //  CommercialID: 12,
    BudgetParentAccID: 1102,
    GeneralPriceListID: null,
   // PriceListID: 2,
   // GuarantorAccID: 65,
    RecordAddBy: this.salsman.ArName
  };

  constructor(
    private LS: LocalStorageService,
    private api: DataService,
    private loadingCtrl: LoadingController,
    private fakeApi: FakeApiService,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.LS.getSortData().then((data: any) => {
    //   //    this.sorts = Object.values(sort);
    //   this.sorts = data;
    // }).catch(err => {
    //   console.log(err);
    // });

    this.fakeApi.getAllClientSort().then((data: any) => {
      console.log(data.res.rows.item(0));
    //  this.sort = data.res.rows.item(0);
      if (this.platform.is('cordova')) {
       // this.items = [];
            if (data.res.rows.length > 0) {
              for (let i = 0; i < data.res.rows.length; i++) {
                this.sorts.push(data.res.rows.item(i));
              }
            }
      } else {
        this.sorts = Object.values(data.res.rows);
      }
      console.log(this.sorts);
    }).catch(err => {
      console.log(err);
    });
  }

  async uploadClient() {

    if (this.client.AccArName === '') {
      alert('Please fill all required fields');
      console.log(this.client);
    } else {
      console.log(this.client);

      // const loading = await this.loadingCtrl.create({
      //   message: 'Please Wait'
      // });
      //  await loading.present();

       if (this.api.networkStatus === 'Connected') {
  //       alert('Connected');
        this.api.uploadClient(this.client).then(res => {
          console.log(res);
        //  alert(JSON.stringify(res));
        // loading.dismiss();
        }, err => {
        //  loading.dismiss();
          console.log(err);
         // alert(JSON.stringify(err));
        }).catch(exp => {
        //  alert(JSON.stringify(exp));
        });
       } else {
       // alert('disConnected');
         const data = {api : 'uploadClient', data : this.client};
         let savedData: any = localStorage.getItem('savedData');
         if (savedData) {
           savedData = JSON.parse(savedData);
           savedData.push(data);
           savedData = JSON.stringify(savedData);
           localStorage.setItem('savedData', savedData);
         } else {
          savedData = [];
          savedData.push(data);
           savedData = JSON.stringify(savedData);
           localStorage.setItem('savedData', savedData);
         }
       }

       this.router.navigate(['/clients', 'view']);


    }
  }

}
