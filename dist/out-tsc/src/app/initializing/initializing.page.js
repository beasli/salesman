var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { FakeApiService } from '../service/fake-api/fake-api.service';
import { DataService } from '../service/api/data.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
var InitializingPage = /** @class */ (function () {
    function InitializingPage(menuCtrl, fakeApi, LS, data, router, toastController) {
        this.menuCtrl = menuCtrl;
        this.fakeApi = fakeApi;
        this.LS = LS;
        this.data = data;
        this.router = router;
        this.toastController = toastController;
        this.loadProgressForCompany = 0;
        this.loadProgressForUser = 0;
        this.loadProgressForUserRole = 0;
        this.loadProgressForCurrency = 0;
        this.loadProgressForLookup = 0;
        this.loadProgressForInventory = 0;
        this.loadProgressForSort = 0;
        this.loadProgressForSalesOrder = 0;
        this.loadProgressForClientList = 0;
        this.loadProgressForInvoicesList = 0;
        this.loadProgressForCollectionsList = 0;
        this.loadProgressForItemHistory = 0;
        this.loadProgressForClientSort = 0;
        this.loadProgressForClientBalance = 0;
        this.loadProgressForBank = 0;
        this.lookupDwnImg = false;
        this.companyDwnImg = false;
        this.userDwnImg = false;
        this.roleDwnImg = false;
        this.inventoryDwnImg = false;
        this.sortDwnImg = false;
        this.currencyDwnImg = false;
        this.salesOrderDwnImg = false;
        this.clientListDwnImg = false;
        this.invoicesListDwnImg = false;
        this.collectionsListDwnImg = false;
        this.itemHistoryListDwnImg = false;
        this.clientSortListDwnImg = false;
        this.clientBalanceListDwnImg = false;
        this.bankListDwnImg = false;
    }
    InitializingPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    InitializingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fakeApi.cleanDb().then(function (data) {
            console.log('deleted');
            if (_this.data.networkStatus === 'Connected') {
                _this.initLookupLS().then(function (res) {
                    console.log('lookup', res);
                    _this.initCompanyLS().then(function (resc) {
                        console.log('Company', resc);
                        _this.initUsersLS().then(function (resu) {
                            console.log('Users', resu);
                            _this.initRolesLS().then(function (resr) {
                                console.log('Roles', resr);
                                _this.initCurrencyLS().then(function (rescur) {
                                    console.log('Currency', rescur);
                                    _this.initSortLS().then(function (resi) {
                                        console.log('Sort', resi);
                                        _this.initInventory().then(function (ress) {
                                            console.log('Inventory', ress);
                                            _this.initSalesOrder().then(function (resso) {
                                                _this.initClientList().then(function (rescl) {
                                                    _this.initInvoicesList().then(function (resil) {
                                                        _this.initCollectionsList().then(function (rescll) {
                                                            _this.initItemHistory().then(function (resih) {
                                                                _this.initClientSort().then(function (rescs) {
                                                                    _this.initClientBalance().then(function (rescb) {
                                                                        _this.initBank().then(function (resb) {
                                                                            _this.initWhareHouseLS().then(function (reswh) {
                                                                                _this.interval = setInterval(function () {
                                                                                    console.log(_this.loadProgressForBank);
                                                                                    if (_this.loadProgressForBank >= 99.99) {
                                                                                        clearInterval(_this.interval);
                                                                                        localStorage.setItem('DataInstalled', 'true');
                                                                                        _this.router.navigate(['/salesmanlogin']);
                                                                                    }
                                                                                }, 100);
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    }).catch(function (ex) {
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
            }
            else {
                _this.presentToast('Please check your internet connection.');
            }
        }).catch(function (exp) {
            console.log(exp);
        });
    };
    InitializingPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
     * Methods for local storage
     */
    InitializingPage.prototype.initLookupLS = function () {
        var _this = this;
        this.lookupDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getLookup().then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.lookupDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setLookup(rows)
                        .then(function (res) {
                        _this.loadProgressForLookup = 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    resolve(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    InitializingPage.prototype.initCompanyLS = function () {
        var _this = this;
        this.companyDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getCompany(1).then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.companyDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setCompany(rows)
                        .then(function (res) {
                        _this.loadProgressForCompany = 100;
                    })
                        .catch(function (err) {
                        console.log('err', err);
                    });
                    resolve(item);
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                console.log('excption', e);
            });
        });
    };
    InitializingPage.prototype.initRolesLS = function () {
        var _this = this;
        this.roleDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getRoles().then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.roleDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setRole(rows)
                        .then(function (res) {
                        _this.loadProgressForUserRole = 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    InitializingPage.prototype.initUsersLS = function () {
        var _this = this;
        this.userDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getUsers().then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.userDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setUser(rows)
                        .then(function (res) {
                        _this.loadProgressForUser = 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    InitializingPage.prototype.initSortLS = function () {
        var _this = this;
        this.sortDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getSort(1).then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.sortDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setSort(rows)
                        .then(function (res) {
                        _this.loadProgressForSort += 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    InitializingPage.prototype.initCurrencyLS = function () {
        var _this = this;
        this.currencyDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getCurrency().then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.currencyDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setCurrency(rows)
                        .then(function (res) {
                        _this.loadProgressForCurrency = 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    InitializingPage.prototype.initWhareHouseLS = function () {
        var _this = this;
        this.currencyDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.data.getWarehouse().then(function (item) {
                if (item.ReturnCode === 0) {
                    _this.currencyDwnImg = false;
                    var rows = item.Data;
                    _this.LS.setWarehouse(rows)
                        .then(function (res) {
                        _this.loadProgressForCurrency = 100;
                        resolve(res);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(item);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    ////////////////////////////
    InitializingPage.prototype.initInventory = function () {
        var _this = this;
        this.inventoryDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initInventoryItems()
                .then(function (data) {
                _this.data.InventryItem().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.inventoryDwnImg = false;
                        var rows = item.Data;
                        var len_1 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setInventoryItems(element)
                                .then(function (res) {
                                if (_this.loadProgressForInventory < 100) {
                                    _this.loadProgressForInventory += len_1;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initSalesOrder = function () {
        var _this = this;
        this.salesOrderDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initSalesOrder()
                .then(function (data) {
                _this.data.getSalesOrder().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.salesOrderDwnImg = false;
                        var rows = item.Data;
                        var len_2 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setSalesOrder(element)
                                .then(function (res) {
                                if (_this.loadProgressForSalesOrder < 100) {
                                    _this.loadProgressForSalesOrder += len_2;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initClientList = function () {
        var _this = this;
        this.clientListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initClientList()
                .then(function (data) {
                _this.data.getClientList().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.clientListDwnImg = false;
                        var rows = item.Data;
                        var len_3 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setClientList(element)
                                .then(function (res) {
                                if (_this.loadProgressForClientList < 100) {
                                    _this.loadProgressForClientList += len_3;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initInvoicesList = function () {
        var _this = this;
        this.invoicesListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initInvoicesList()
                .then(function (data) {
                _this.data.getInvoicesList().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.invoicesListDwnImg = false;
                        var rows = item.Data;
                        var len_4 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setInvoicesList(element)
                                .then(function (res) {
                                if (_this.loadProgressForInvoicesList < 100) {
                                    _this.loadProgressForInvoicesList += len_4;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initCollectionsList = function () {
        var _this = this;
        this.collectionsListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initCollectionsList()
                .then(function (data) {
                _this.data.getCollectionsList().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.collectionsListDwnImg = false;
                        var rows = item.Data;
                        var len_5 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setCollectionsList(element)
                                .then(function (res) {
                                if (_this.loadProgressForCollectionsList < 100) {
                                    _this.loadProgressForCollectionsList += len_5;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initItemHistory = function () {
        var _this = this;
        this.itemHistoryListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initItemHistory()
                .then(function (data) {
                _this.data.getItemHistory().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.itemHistoryListDwnImg = false;
                        var rows = item.Data;
                        var len_6 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setItemHistory(element)
                                .then(function (res) {
                                if (_this.loadProgressForItemHistory < 100) {
                                    _this.loadProgressForItemHistory += len_6;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initClientSort = function () {
        var _this = this;
        this.clientSortListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initClientSort()
                .then(function (data) {
                _this.data.getClientSort().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.clientSortListDwnImg = false;
                        var rows = item.Data;
                        var len_7 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setClientSort(element)
                                .then(function (res) {
                                if (_this.loadProgressForClientSort < 100) {
                                    _this.loadProgressForClientSort += len_7;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initClientBalance = function () {
        var _this = this;
        this.clientBalanceListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initClientBalance()
                .then(function (data) {
                _this.data.getClientBalance().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.clientBalanceListDwnImg = false;
                        var rows = item.Data;
                        var len_8 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setClientBalance(element)
                                .then(function (res) {
                                if (_this.loadProgressForClientBalance < 100) {
                                    _this.loadProgressForClientBalance += len_8;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage.prototype.initBank = function () {
        var _this = this;
        this.bankListDwnImg = true;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initBank()
                .then(function (data) {
                _this.data.getBank().then(function (item) {
                    if (item.ReturnCode === 0) {
                        _this.bankListDwnImg = false;
                        var rows = item.Data;
                        var len_9 = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setBank(element)
                                .then(function (res) {
                                if (_this.loadProgressForBank < 100) {
                                    _this.loadProgressForBank += len_9;
                                }
                                resolve(res);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    }
                    else {
                        reject(item);
                    }
                }).catch(function (e) {
                    reject(e);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    InitializingPage = __decorate([
        Component({
            selector: 'app-initializing',
            templateUrl: './initializing.page.html',
            styleUrls: ['./initializing.page.scss'],
        }),
        __metadata("design:paramtypes", [MenuController,
            FakeApiService,
            LocalStorageService,
            DataService,
            Router,
            ToastController])
    ], InitializingPage);
    return InitializingPage;
}());
export { InitializingPage };
//# sourceMappingURL=initializing.page.js.map