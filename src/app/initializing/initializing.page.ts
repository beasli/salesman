import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { FakeApiService } from '../service/fake-api/fake-api.service';
import { DataService } from '../service/api/data.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';


@Component({
  selector: 'app-initializing',
  templateUrl: './initializing.page.html',
  styleUrls: ['./initializing.page.scss'],
})
export class InitializingPage implements OnInit {
  public loadProgressForCompany = 0;
  public loadProgressForUser = 0;
  public loadProgressForUserRole = 0;
  public loadProgressForCurrency = 0;
  public loadProgressForLookup = 0;
  public loadProgressForInventory = 0;
  public loadProgressForSort = 0;
  public loadProgressForSalesOrder = 0;
  public loadProgressForClientList = 0;
  public loadProgressForInvoicesList = 0;
  public loadProgressForCollectionsList = 0;
  public loadProgressForItemHistory = 0;
  public loadProgressForClientSort = 0;
  public loadProgressForClientBalance = 0;
  public loadProgressForBank = 0;
  public loadProgressForWhareHouse = 0;
  public loadProgressForSpecialPrice = 0;


  lookupDwnImg = false;
  companyDwnImg = false;
  userDwnImg = false;
  roleDwnImg = false;
  inventoryDwnImg = false;
  sortDwnImg = false;
  currencyDwnImg = false;
  salesOrderDwnImg = false;
  clientListDwnImg = false;
  invoicesListDwnImg = false;
  collectionsListDwnImg = false;
  itemHistoryListDwnImg = false;
  clientSortListDwnImg = false;
  clientBalanceListDwnImg = false;
  bankListDwnImg = false;
  whareHouseListDwnImg = false;
  specialPriceListDwnImg = false;
  interval: any;

  constructor(
    public menuCtrl: MenuController,
    private fakeApi: FakeApiService,
    private LS: LocalStorageService,
    private data: DataService,
    private router: Router,
    public toastController: ToastController) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.fakeApi.cleanDb().then(data => {
      console.log('deleted');
      if (this.data.networkStatus === 'Connected') {
        this.initLookupLS().then((res) => {
          console.log('lookup', res);
          this.initCompanyLS().then((resc) => {
            console.log('Company', resc);
            this.initUsersLS().then((resu) => {
              console.log('Users', resu);
              this.initRolesLS().then((resr) => {
                console.log('Roles', resr);
                this.initCurrencyLS().then((rescur) => {
                  console.log('Currency', rescur);
                  this.initSortLS().then((resi) => {
                    console.log('Sort', resi);
                    this.initInventory().then((ress) => {
                      console.log('Inventory', ress);
                      this.initSalesOrder().then((resso) => {
                        this.initClientList().then((rescl) => {
                          this.initInvoicesList().then((resil) => {
                            this.initCollectionsList().then((rescll) => {
                              this.initItemHistory().then((resih) => {
                                this.initClientSort().then((rescs) => {
                                  this.initClientBalance().then((rescb) => {
                                    this.initBank().then((resb) => {
                                      this.initWhareHouseLS().then((reswh) => {
                                        this.initSpecialPrice().then((sp) => {
                                          this.interval = setInterval(() => {
                                            console.log(this.loadProgressForSpecialPrice);
                                            if (this.loadProgressForSpecialPrice >= 99.99) {
                                              clearInterval(this.interval);
                                              localStorage.setItem('DataInstalled', 'true');
                                              this.router.navigate(['/salesmanlogin']);
                                            }
                                          }, 100);
                                        }).catch(exp => {
                                          console.log(exp);
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          }).catch(ex => {
                            console.log(ex);
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } else {
        this.presentToast('Please check your internet connection.');
      }
    }).catch(exp => {
      console.log(exp);
    });


  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  /*
   * Methods for local storage
   */

  private initLookupLS() {
    this.lookupDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getLookup().then((item: any) => {
        if (item.ReturnCode === 0) {
          this.lookupDwnImg = false;
          const rows = item.Data;
          this.LS.setLookup(rows)
            .then(res => {
              this.loadProgressForLookup = 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  private initCompanyLS() {
    this.companyDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getCompany(1).then((item: any) => {
        if (item.ReturnCode === 0) {
          this.companyDwnImg = false;
          const rows = item.Data;
          this.LS.setCompany(rows)
            .then(res => {
              this.loadProgressForCompany = 100;
            })
            .catch(err => {
              console.log('err', err);
            });
          resolve(item);
        } else {
          reject(item);
        }
      }).catch(e => {
        console.log('excption', e);
      });
    });
  }

  private initRolesLS() {
    this.roleDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getRoles().then((item: any) => {
        if (item.ReturnCode === 0) {
          this.roleDwnImg = false;
          const rows = item.Data;
          this.LS.setRole(rows)
            .then(res => {
              this.loadProgressForUserRole = 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          reject(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  private initUsersLS() {
    this.userDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getUsers().then((item: any) => {
        if (item.ReturnCode === 0) {
          this.userDwnImg = false;
          const rows = item.Data;
          this.LS.setUser(rows)
            .then(res => {
              this.loadProgressForUser = 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          reject(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  private initSortLS() {
    this.sortDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getSort(1).then((item: any) => {
        if (item.ReturnCode === 0) {
          this.sortDwnImg = false;
          const rows = item.Data;
          this.LS.setSort(rows)
            .then(res => {
              this.loadProgressForSort += 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          reject(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  private initCurrencyLS() {
    this.currencyDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getCurrency().then((item: any) => {
        if (item.ReturnCode === 0) {
          this.currencyDwnImg = false;
          const rows = item.Data;
          this.LS.setCurrency(rows)
            .then(res => {
              this.loadProgressForCurrency = 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          reject(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  private initWhareHouseLS() {
    this.currencyDwnImg = true;
    return new Promise((resolve, reject) => {
      this.data.getWarehouse().then((item: any) => {
        if (item.ReturnCode === 0) {
          this.currencyDwnImg = false;
          const rows = item.Data;
          this.LS.setWarehouse(rows)
            .then(res => {
              this.loadProgressForCurrency = 100;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          reject(item);
        }
      }).catch(e => {
        reject(e);
      });
    });
  }

  ////////////////////////////


  private initInventory() {
    this.inventoryDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initInventoryItems()
        .then(data => {
          this.data.InventryItem().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.inventoryDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setInventoryItems(element)
                  .then(res => {
                    if (this.loadProgressForInventory < 100) {
                      this.loadProgressForInventory += len;
                    }
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
    this.salesOrderDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initSalesOrder()
        .then(data => {
          this.data.getSalesOrder().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.salesOrderDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setSalesOrder(element)
                  .then(res => {
                    if (this.loadProgressForSalesOrder < 100) {
                      this.loadProgressForSalesOrder += len;
                    }
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


  private initClientList() {
    this.clientListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initClientList()
        .then(data => {
          this.data.getClientList().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.clientListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setClientList(element)
                  .then(res => {
                    if (this.loadProgressForClientList < 100) {
                      this.loadProgressForClientList += len;
                    }
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
    this.invoicesListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initInvoicesList()
        .then(data => {
          this.data.getInvoicesList().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.invoicesListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setInvoicesList(element)
                  .then(res => {
                    if (this.loadProgressForInvoicesList < 100) {
                      this.loadProgressForInvoicesList += len;
                    }
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


  private initCollectionsList() {
    this.collectionsListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initCollectionsList()
        .then(data => {
          this.data.getCollectionsList().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.collectionsListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setCollectionsList(element)
                  .then(res => {
                    if (this.loadProgressForCollectionsList < 100) {
                      this.loadProgressForCollectionsList += len;
                    }
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
    this.itemHistoryListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initItemHistory()
        .then(data => {
          this.data.getItemHistory().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.itemHistoryListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setItemHistory(element)
                  .then(res => {
                    if (this.loadProgressForItemHistory < 100) {
                      this.loadProgressForItemHistory += len;
                    }
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

  private initClientSort() {
    this.clientSortListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initClientSort()
        .then(data => {
          this.data.getClientSort().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.clientSortListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setClientSort(element)
                  .then(res => {
                    if (this.loadProgressForClientSort < 100) {
                      this.loadProgressForClientSort += len;
                    }
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


  private initClientBalance() {
    this.clientBalanceListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initClientBalance()
        .then(data => {
          this.data.getClientBalance().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.clientBalanceListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setClientBalance(element)
                  .then(res => {
                    if (this.loadProgressForClientBalance < 100) {
                      this.loadProgressForClientBalance += len;
                    }
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


  private initBank() {
    this.bankListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initBank()
        .then(data => {
          this.data.getBank().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.bankListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setBank(element)
                  .then(res => {
                    if (this.loadProgressForBank < 100) {
                      this.loadProgressForBank += len;
                    }
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


  private initSpecialPrice() {
    this.specialPriceListDwnImg = true;
    return new Promise((resolve, reject) => {
      this.fakeApi.initSpecialPrice()
        .then(data => {
          this.data.getSpecialPrice().then((item: any) => {
            if (item.ReturnCode === 0) {
              this.specialPriceListDwnImg = false;
              const rows = item.Data;
              const len = 100 / rows.length;
              rows.forEach(element => {
                this.fakeApi.setSpecialPrice(element)
                  .then(res => {
                    if (this.loadProgressForSpecialPrice < 100) {
                      this.loadProgressForSpecialPrice += len;
                    }
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

}
