import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-history',
  templateUrl: './client-history.page.html',
  styleUrls: ['./client-history.page.scss'],
})
export class ClientHistoryPage implements OnInit {

  clients: any;

  constructor(
    private fakeApi: FakeApiService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.clients = JSON.parse(localStorage.getItem('Client'));
    this.clients = JSON.parse(this.clients.History);
    this.clients = this.clients.filter(x => (x.StatusID === 1 || x.StatusID === 2));
    console.log(this.clients);
  }

  viewDetail(id) {
    console.log('baba');
    this.fakeApi.getInvoicesById(id).then( (data: any) => {
      if ((data.res.rows).length) {
        localStorage.setItem('Invoice', JSON.stringify(data.res.rows.item(0)));
        this.router.navigate(['/invoice-detail']);
      } else {
        this.presentToast('We don`t have data related to this voucher');
      }
    }).catch(exp => {
      console.log(exp);
    });

  }


  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
