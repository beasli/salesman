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
import { DataService } from '../../service/api/data.service';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
var SyncComponent = /** @class */ (function () {
    function SyncComponent(data, fakeApi, loadingCtrl, router, popoverController) {
        this.data = data;
        this.fakeApi = fakeApi;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.popoverController = popoverController;
    }
    SyncComponent.prototype.ngOnInit = function () {
    };
    SyncComponent.prototype.initClientList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initClientList()
                .then(function (data) {
                _this.data.getClientList().then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            _this.fakeApi.setClientList(element)
                                .then(function (res) {
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
    SyncComponent.prototype.initItemHistory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initItemHistory()
                .then(function (data) {
                _this.data.getItemHistory().then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            _this.fakeApi.setItemHistory(element)
                                .then(function (res) {
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
    SyncComponent.prototype.initInventory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initInventoryItems()
                .then(function (data) {
                _this.data.InventryItem().then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        var len = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setInventoryItems(element)
                                .then(function (res) {
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
    SyncComponent.prototype.initSalesOrder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initSalesOrder()
                .then(function (data) {
                _this.data.getSalesOrder().then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            _this.fakeApi.setSalesOrder(element)
                                .then(function (res) {
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
    SyncComponent.prototype.initInvoicesList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fakeApi.initInvoicesList()
                .then(function (data) {
                _this.data.getInvoicesList().then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        var len = 100 / rows.length;
                        rows.forEach(function (element) {
                            _this.fakeApi.setInvoicesList(element)
                                .then(function (res) {
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
    SyncComponent.prototype.halfSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.popoverController.dismiss();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Sync In Process, Please Wait'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.fakeApi.halfSyncClean().then(function (del) {
                            _this.initClientList().then(function (data) {
                                _this.initInventory().then(function (inv) {
                                    _this.initItemHistory().then(function (ih) {
                                        _this.initSalesOrder().then(function (so) {
                                            _this.initInvoicesList().then(function (il) {
                                                loading.dismiss();
                                            }).catch(function (exp) {
                                                console.log(exp);
                                            });
                                        }).catch(function (exp) {
                                            console.log(exp);
                                        });
                                    }).catch(function (exp) {
                                        console.log(exp);
                                    });
                                }).catch(function (exp) {
                                    console.log(exp);
                                });
                            }).catch(function (exp) {
                                console.log(exp);
                            });
                        }).catch(function (exp) {
                            console.log(exp);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncComponent.prototype.fullSync = function () {
        localStorage.removeItem('DataInstalled');
        this.popoverController.dismiss();
        this.router.navigate(['initializing']);
    };
    SyncComponent = __decorate([
        Component({
            selector: 'app-sync',
            templateUrl: './sync.component.html',
            styleUrls: ['./sync.component.scss']
        }),
        __metadata("design:paramtypes", [DataService,
            FakeApiService,
            LoadingController,
            Router,
            PopoverController])
    ], SyncComponent);
    return SyncComponent;
}());
export { SyncComponent };
//# sourceMappingURL=sync.component.js.map