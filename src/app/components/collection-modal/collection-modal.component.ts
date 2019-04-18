import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { DatePipe } from '@angular/common';

import { IonicSelectableComponent } from 'ionic-selectable';
import { BankModalComponent } from '../bank-modal/bank-modal.component';

@Component({
  selector: 'app-collection-modal',
  templateUrl: './collection-modal.component.html',
  styleUrls: ['./collection-modal.component.scss']
})
export class CollectionModalComponent implements OnInit {

  @Input() value: any;
  @Input() data: any;
  @Input() index: any;
  Currency = JSON.parse(localStorage.getItem('Currency'));
  header = JSON.parse(localStorage.getItem('CollectionsHeader'));
  Cash = {
    AccID: 1,
    CurrencyID: 1,
    Equal_Debit: 0,
    Debit: 0,
    TheRate: 1
  };
  Check = {
      AccID: 4,
      CheckNo: '',
      CheckAccout: '',
      CurrencyID: 1,
      Equal_Debit: 0,
      Debit: 0,
      TheRate: 1,
      ChequeDate: '',
      BranchCode: '',
      ChequeStatusId: 5,
      RecieptAverage: 29.474
  };

  CheckAcc = [
    {
      AccID : 4,
      CompanyID : 1,
      AccArName	: 'الشيكات الواردة',
      AccEnName	: 'الشيكات الواردة',
      ParentAccID: 1101,
      AccLevel: 4,
      AccIDForUser: 1200
    } ];

  CashAcc = [
    {
      AccID : 1,
      CompanyID : 1,
      AccArName	: 'الصندوق النقدي',
      AccEnName	: 'الصندوق النقدي',
      ParentAccID: 1101,
      AccLevel: 4,
      AccIDForUser: 1101
    }
  ];

  date: any;

  bank: any;

  constructor(
    public modalController: ModalController,
    public events: Events,
    private fakeApi: FakeApiService,
    private platform: Platform,
    private datePipe: DatePipe
  ) {
    const current_date = new Date();
    console.log(this.datePipe.transform(current_date, 'yyyy-MM-dd'));
    this.date = this.datePipe.transform(current_date, 'yyyy-MM-dd');
    this.Check.ChequeDate = this.date;

   }


  async openBankModal() {
    // Create a modal using MyModalComponent with some initial data
      const modal = await this.modalController.create({
        component: BankModalComponent
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      this.Check.BranchCode = data.result.BranchCode;
      this.bank = data.result;
      console.log(data);
  }


  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  accept() {
    if (this.value === 'cash') {
      console.log(this.value);
      this.header.Cash.push(this.Cash);
      localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
    } else if (this.value === 'check') {
      this.header.Cheque.push(this.Check);
      localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
    }
    this.events.publish('Collection:updated', 1, Date.now());
    this.modalController.dismiss();
  }

  update() {
    if (this.value === 'cash') {
      console.log(this.value);
      this.header.Cash[this.index] = this.data;
      localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
    } else if (this.value === 'check') {
      this.header.Cheque[this.index] = this.data;
      localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
    }
    this.events.publish('Collection:updated', 1, Date.now());
    this.modalController.dismiss();
  }



}
