import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit {

  constructor(
              public data: DataService,
              public fakeApi: FakeApiService,
              private loadingCtrl: LoadingController,
              private router: Router,
              public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  private initClientList() {
    return new Promise((resolve, reject) => {
      this.fakeApi.initClientList()
        .then(data => {
          this.data.getClientList().then((item: any) => {
            if (item.ReturnCode === 0) {
              const rows = item.Data;
              rows.forEach(element => {
                this.fakeApi.setClientList(element)
                  .then(res => {
                    resolve(res);
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            } else {
              reject(item);
            }
          }).catch(e => {
            reject(e);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  private initItemHistory() {
    return new Promise((resolve, reject) => {
      this.fakeApi.initItemHistory()
        .then(data => {
          this.data.getItemHistory().then((item: any) => {
            if (item.ReturnCode === 0) {
              const rows = item.Data;
              rows.forEach(element => {
                this.fakeApi.setItemHistory(element)
                  .then(res => {
                    resolve(res);
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            } else {
              reject(item);
            }
          }).catch(e => {
            reject(e);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  private initInventory() {
    return new Promise((resolve, reject) => {
      this.fakeApi.initInventoryItems()
        .then(data => {
          this.data.InventryItem().then((item: any) => {
            if (item.ReturnCode === 0) {
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setInventoryItems(element)
                  .then(res => {
                    resolve(res);
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            } else {
              reject(item);
            }
          }).catch(e => {
            reject(e);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  private initSalesOrder() {
    return new Promise((resolve, reject) => {
      this.fakeApi.initSalesOrder()
        .then(data => {
          this.data.getSalesOrder().then((item: any) => {
            if (item.ReturnCode === 0) {
              const rows = item.Data;
              rows.forEach(element => {
                this.fakeApi.setSalesOrder(element)
                  .then(res => {
                    resolve(res);
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            } else {
              reject(item);
            }
          }).catch(e => {
            reject(e);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  private initInvoicesList() {
    return new Promise((resolve, reject) => {
      this.fakeApi.initInvoicesList()
        .then(data => {
          this.data.getInvoicesList().then((item: any) => {
            if (item.ReturnCode === 0) {
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setInvoicesList(element)
                  .then(res => {
                    resolve(res);
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            } else {
              reject(item);
            }
          }).catch(e => {
            reject(e);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async halfSync() {
    this.popoverController.dismiss();
    const loading = await this.loadingCtrl.create({
      message: 'Sync In Process, Please Wait'
    });
    await loading.present();
    this.fakeApi.halfSyncClean().then(del => {

      this.initClientList().then(data => {
          this.initInventory().then(inv => {
            this.initItemHistory().then(ih => {
              this.initSalesOrder().then(so => {
                this.initInvoicesList().then(il => {
                  loading.dismiss();
                }).catch(exp => {
                  console.log(exp);
                });
              }).catch(exp => {
                console.log(exp);
              });
            }).catch(exp => {
              console.log(exp);
            });
          }).catch(exp => {
            console.log(exp);
          });
      }).catch(exp => {
        console.log(exp);
      });

    }).catch(exp => {
      console.log(exp);
    });
  }

  fullSync() {
    localStorage.removeItem('DataInstalled');
    this.popoverController.dismiss();
    this.router.navigate(['initializing']);

  }

}
