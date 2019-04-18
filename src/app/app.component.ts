import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DataService } from './service/api/data.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SyncComponent } from './components/sync/sync.component';
import { FakeApiService } from './service/fake-api/fake-api.service';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Catalog',
      url: '/catalog',
      icon: 'cube'
    },
    {
      title: 'Clients',
      url: '/clients',
      icon: 'people'
    },
    {
      title: 'Sales Orders',
      url: '/sales-order-list',
      icon: 'list-box'
    },
    {
      title: 'Upload Orders',
      url: '/order-upload',
      icon: 'list-box'
    },
    {
      title: 'Invoices',
      url: '/invoices',
      icon: 'list-box'
    },
    {
      title: 'Collections',
      url: '/collections',
      icon: 'list-box'
    },
    {
      title: 'Events',
      url: '/event-create',
      icon: 'list-box'
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: 'checkbox-outline'
    },
    {
      title: 'Calender',
      url: '/calender',
      icon: 'calendar'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'unlock'
    }
  ];

  interval: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private dataApi: DataService,
    private router: Router,
    private oneSignal: OneSignal,
    public popoverController: PopoverController,
    public fakeApi: FakeApiService,
    public LS: LocalStorageService,
    public events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#00afc5');
      this.splashScreen.hide();

      // OneSignal code start from here
      this.oneSignal.startInit('302928cf-6636-4ecb-afb0-ec2d30bc08c1', '301809849024');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log(data.payload.additionalData);
        this.updateDb(data.payload.additionalData);
        // alert('notification Recevied');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        console.log('// do something when a notification is opened');
        // alert('notification opens');
      });

      this.oneSignal.getIds().then(
        ids => {
          //  alert(JSON.stringify(ids));
          localStorage.setItem('DeviceToken', ids.userId);
        }
      );

      this.oneSignal.endInit();
      // OneSignal code end here

      console.log(this.network);
      // watch network for a disconnect
      this.network.onDisconnect().subscribe(() => {
        console.log('Disconnected');
        this.dataApi.networkStatus = 'Disconnected';
        clearInterval(this.interval);

      });

      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        console.log('Connected');
        this.dataApi.networkStatus = 'Connected';
        this.uploadSavedData();
        this.interval = setInterval(() => {
          console.log('inetval');
          if (this.dataApi.networkStatus = 'Connected') {
            this.uploadSavedData();
          }
        }, 10000);
      });

      if (this.network.type !== 'none') {
        console.log('Connected hai');
        this.dataApi.networkStatus = 'Connected';
        this.uploadSavedData();
        this.interval = setInterval(() => {
          console.log('inetval');
          this.uploadSavedData();
        }, 10000);
      }

      this.loadEvents();
      this.loadTasks();

      // interval
      // this.interval =  setInterval(() => {
      //   console.log('inetval');
      //   if (this.dataApi.networkStatus = 'Connected') {
      //     this.uploadSavedData();
      //   }
      // }, 60000);

    });
  }


  openPage(p) {
    if (p.url === '/catalog') {
      this.router.navigate([p.url, 'view']);
    } else if (p.url === '/logout') {
      localStorage.removeItem('Salesman');
      localStorage.removeItem('LoginAs');
      this.router.navigate(['/salesmanlogin']);
    } else if (p.url === '/clients') {
      this.router.navigate([p.url, 'view']);
    } else {
      this.router.navigate([p.url]);
    }
  }

  checkPage(p) {
    const LoginAs = localStorage.getItem('LoginAs');
    if (LoginAs === 'Client') {
      if (p.url === '/clients') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SyncComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  public updateDb(data) {
    console.log('update data here');
    switch (data.Flag) {
      case 'Order':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag,
          CompanyID: 1,
          Voucher_TypeID: 7,
          StatusID: 2
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {

              if (data.IsCreated === true) {

                console.log('Created');
                this.fakeApi.setSalesOrder(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else if (data.IsUpdated === true) {

                console.log('IsUpdated');
                this.fakeApi.updateSalesOrder(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else {

                console.log('galat h');
              }

            });
          }
        }).catch(exp => {
          console.log(exp);
        });
        break;

      case 'Invoice':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag,
          CompanyID: 1,
          Voucher_TypeID: 9,
          StatusID: 2
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {

              if (data.IsCreated) {

                this.fakeApi.setInvoicesList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else if (data.IsUpdated) {

                this.fakeApi.updateInvoicesList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else {

                console.log('galat h');
              }

            });
          }
        }).catch(exp => {
          console.log(exp);
        });

        break;

      case 'Collection':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag,
          CompanyID: 1,
          StatusID: 1
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {

              if (data.IsCreated) {

                this.fakeApi.setCollectionsList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else if (data.IsUpdated) {

                this.fakeApi.updateCollectionsList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else {

                console.log('galat h');
              }

            });
          }
        }).catch(exp => {
          console.log(exp);
        });

        break;

      case 'Client':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag,
          CompanyID: 1
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {

              if (data.IsCreated) {

                this.fakeApi.setClientList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else if (data.IsUpdated) {

                this.fakeApi.updateClientList(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else {

                console.log('galat h');
              }

            });
          }
        }).catch(exp => {
          console.log(exp);
        });

        break;

      case 'User':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const element = item.Data;

            if (data.IsCreated) {
              if (element) {
                const JsonData = JSON.parse(localStorage.getItem('User'));
                JsonData.push(element);
                localStorage.setItem('User', JSON.stringify(JsonData));
              } else {
                console.log('blank');
              }

            } else if (data.IsUpdated) {

              const JsonData = JSON.parse(localStorage.getItem('User'));
              const res: any = JsonData.findIndex(x => x.Id === element.Id);
              JsonData[res] = element;
              localStorage.setItem('User', JSON.stringify(JsonData));

            } else {

              console.log('galat h');
            }

          }
        }).catch(exp => {
          console.log(exp);
        });

        break;

      case 'Item':

        this.dataApi.updateDataViaNotification({
          Id: data.Id,
          Flag: data.Flag,
          CompanyID: 1,
          intervalId: 2017,
          itemClassId: 1
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {

              if (data.IsCreated) {

                this.fakeApi.setInventoryItems(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else if (data.IsUpdated) {

                this.fakeApi.updateInventoryItems(element)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  });

              } else {

                console.log('galat h');
              }

            });
          }
        }).catch(exp => {
          console.log(exp);
        });

        break;

      default:
      // code to be executed if n doesn't match any constant
    }

  }

  public uploadSavedData() {

    if (localStorage.getItem('savedOrders')) {
      this.uploadSavedOrders();
    }

    if (localStorage.getItem('savedCollections')) {
      this.uploadSavedCollections();
    }

    if (localStorage.getItem('tempEvents')) {
      this.uploadTempEvents();
    }

    if (localStorage.getItem('tempTasks')) {
      this.uploadTempTasks();
    }

    if (localStorage.getItem('CompletedTasks')) {
      this.uploadCompletedTasks();
    }
  }

  loadEvents() {
    // this.eventSource = this.createRandomEvents();
    // this.eventSource = this.loadAllEvents();
    this.dataApi.getEvents().then((data: any) => {
      if (data.ReturnCode === 0) {
        localStorage.setItem('savedEvents', JSON.stringify(data.Data));
        this.events.publish('savedEvents:updated', 1, Date.now());
      }
    }).catch(ex => {
      console.log('ex', ex);
    });
  }

  loadTasks() {
    // this.eventSource = this.createRandomEvents();
    // this.eventSource = this.loadAllEvents();
    this.dataApi.getTasks().then((data: any) => {
      if (data.ReturnCode === 0) {
        // data.Data.forEach(element => {
        //   if(element.IsCompleted)
        // });

        localStorage.setItem('savedTasks', JSON.stringify((data.Data.filter(x => x.IsCompleted === false))));
        localStorage.setItem('CompletedTasks', JSON.stringify(data.Data.filter(x => x.IsCompleted === true)));
        this.events.publish('savedTasks:updated', 1, Date.now());
        this.events.publish('CompletedTasks:updated', 1, Date.now());
      }
    }).catch(ex => {
      console.log('ex', ex);
    });
  }


  uploadSavedOrders() {
    const savedOrders = JSON.parse(localStorage.getItem('savedOrders'));
    for (let i = 0; i < savedOrders.length; i++) {

      const data = savedOrders[i];
      this.dataApi.uploadSalesOrder(data).then((res: any) => {
        console.log(res.Data);
        if (res.Data) {
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
                    // alert(JSON.stringify(err));
                  });
              });
            }
          }, err => {
            console.log(err);
          }).catch(exp => {
            console.log(exp);
            this.uploadSavedOrders();
            // alert(JSON.stringify(exp));
          });
        } else {
          i--;
        }

      }, err => {
        console.log(err);
        // alert(JSON.stringify(err));
      });

    }
  }

  uploadSavedCollections() {
    const savedCollections = JSON.parse(localStorage.getItem('savedCollections'));
    for (let i = 0; i < savedCollections.length; i++) {

      const data = savedCollections[i];
      this.dataApi.uploadCollections(data).then((res: any) => {
        console.log(res.Data);

        this.dataApi.updateDataViaNotification({
          Id: res.Data.RV_ID,
          Flag: 'Collection',
          CompanyID: 1,
          StatusID: 1
        }).then((item: any) => {
          if (item.ReturnCode === 0) {
            const rows = item.Data;
            rows.forEach(element => {
              this.fakeApi.setCollectionsList(element)
                .then(responce => {
                  console.log(responce);
                  const a = JSON.parse(localStorage.getItem('savedCollections'));
                  a.shift();
                  localStorage.setItem('savedCollections', JSON.stringify(a));
                  this.events.publish('Collection:updated', 1, Date.now());
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
    }
  }

  uploadTempEvents() {
    const tempEvents = JSON.parse(localStorage.getItem('tempEvents'));
    for (let i = 0; i < tempEvents.length; i++) {

      const data = tempEvents[i];
      this.dataApi.uploadEvent(data).then((res: any) => {
        console.log(res);
        if (res.ReturnCode === 0) {

          let savedEvents: any;

          if (!localStorage.getItem('savedEvents')) {
            savedEvents = [];
          } else {
            savedEvents = JSON.parse(localStorage.getItem('savedEvents'));
          }
          savedEvents.push(res.Data);
          localStorage.setItem('savedEvents', JSON.stringify(savedEvents));

          const a = JSON.parse(localStorage.getItem('tempEvents'));
          a.shift();
          localStorage.setItem('tempEvents', JSON.stringify(a));

          this.events.publish('savedEvents:updated', 1, Date.now());
          this.events.publish('tempEvents:updated', 1, Date.now());
        }

      }, err => {
        console.log(err);
      });
    }
  }

  uploadTempTasks() {
    setTimeout(() => {
      const tempTasks = JSON.parse(localStorage.getItem('tempTasks'));
      for (let i = 0; i < tempTasks.length; i++) {

        const data = tempTasks[i];
        this.dataApi.uploadTask(data).then((res: any) => {
          console.log(res);
          if (res.ReturnCode === 0) {

            let savedTasks: any;

            if (!localStorage.getItem('savedTasks')) {
              savedTasks = [];
            } else {
              savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
            }
            res.Data.IsUploaded = 1;
            savedTasks.push(res.Data);
            localStorage.setItem('savedTasks', JSON.stringify(savedTasks));

            const a = JSON.parse(localStorage.getItem('tempTasks'));
            const index = tempTasks.indexOf(data);
            a.splice(index, 1);
            localStorage.setItem('tempTasks', JSON.stringify(a));

            this.events.publish('savedTasks:updated', 1, Date.now());
            this.events.publish('tempTasks:updated', 1, Date.now());
          }

        }, err => {
          console.log(err);
        });
      }
    }, 60000);
  }

  uploadCompletedTasks() {

    setTimeout(() => {
      const tempTasks = JSON.parse(localStorage.getItem('CompletedTasks'));
      for (let i = 0; i < tempTasks.length; i++) {
        // console.log(tempTasks[i]);
        if (tempTasks[i].IsUploaded === 0) {
          const data = tempTasks[i];
          if (tempTasks[i].Id === 0) {
            this.dataApi.uploadTask(data).then((res: any) => {
              console.log(res);
              if (res.ReturnCode === 0) {

                res.Data.IsUploaded = 1;
                let CompletedTask: any;
                if (!localStorage.getItem('CompletedTasks')) {
                  CompletedTask = [];
                  CompletedTask.push(res.Data);
                } else {
                  CompletedTask = JSON.parse(localStorage.getItem('CompletedTasks'));
                  CompletedTask[i] = res.Data;
                }

                localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTask));
                this.events.publish('CompletedTasks:updated', 1, Date.now());
              }

            }, err => {
              console.log(err);
            });
          } else {
            this.dataApi.updateTask(data).then((res: any) => {
              console.log(res);
              if (res.ReturnCode === 0) {

                res.Data.IsUploaded = 1;
                let CompletedTask: any;
                if (!localStorage.getItem('CompletedTasks')) {
                  CompletedTask = [];
                  CompletedTask.push(res.Data);
                } else {
                  CompletedTask = JSON.parse(localStorage.getItem('CompletedTasks'));
                  CompletedTask[i] = res.Data;
                }

                localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTask));
                this.events.publish('CompletedTasks:updated', 1, Date.now());
              }

            }, err => {
              console.log(err);
            });
          }
        }

      }
    }, 60000);

  }


}
