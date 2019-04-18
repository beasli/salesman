import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss']
})
export class BankModalComponent implements OnInit {

  banks: any;
  offset: any;

  constructor(
    private fakeApi: FakeApiService,
    private platform: Platform,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.offset  = 0;
    this.fakeApi.getBank(this.offset).then((data: any) => {
      console.log(data.res.rows.item(0));
      if (this.platform.is('cordova')) {
        this.banks = [];
            if (data.res.rows.length > 0) {
              for (let i = 0; i < data.res.rows.length; i++) {
                this.banks.push(data.res.rows.item(i));
              }
            }
      } else {
        this.banks = Object.values(data.res.rows);
      }
      this.offset += 10;
      console.log(this.banks);
    }).catch(err => {
      console.log(err);
    });
  }

  loadData(event) {

    this.fakeApi.getBank(this.offset).then((data: any) => {
        console.log(data.res.rows.item(0));
        if (this.platform.is('cordova')) {
              if (data.res.rows.length > 0) {
                for (let i = 0; i < data.res.rows.length; i++) {
                  this.banks.push(data.res.rows.item(i));
                }
              } else {
                event.target.disabled = true;
              }
        } else {
          const items = Object.values(data.res.rows);
          if (items.length > 0) {
            items.forEach(ele => {
              this.banks.push(ele);
            });
          } else {
            event.target.disabled = true;
          }
        }

        this.offset += 10;
        console.log('Done');
        event.target.complete();
        console.log(this.banks);
      }).catch(err => {
        event.target.disabled = true;
        console.log(err);
      });
    }

    searchItem(evt) {
      console.log(evt.target.value);
      if (!evt.target.value) {
        this.ngOnInit();
      } else {
        this.fakeApi.getBankListBySearchKeyword('%' + evt.target.value + '%').then( (data: any) => {
          if (this.platform.is('cordova')) {
            this.banks = [];
                if (data.res.rows.length > 0) {
                  for (let i = 0; i < data.res.rows.length; i++) {
                    this.banks.push(data.res.rows.item(i));
                  }
                }
          } else {
            this.banks = Object.values(data.res.rows);
          }
        }).catch(exp => {
          console.log('exp', exp);
        });
      }
    }

    selectBank(client) {
      this.modalController.dismiss({
        'result': client
      });
    }

}
