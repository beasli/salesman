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
import { Platform } from '@ionic/angular';
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
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, network, dataApi, router, oneSignal, popoverController, fakeApi, LS) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.network = network;
        this.dataApi = dataApi;
        this.router = router;
        this.oneSignal = oneSignal;
        this.popoverController = popoverController;
        this.fakeApi = fakeApi;
        this.LS = LS;
        this.appPages = [
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
                title: 'Calender',
                url: '/calender',
                icon: 'list-box'
            },
            {
                title: 'Logout',
                url: '/logout',
                icon: 'unlock'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('#00afc5');
            _this.splashScreen.hide();
            // OneSignal code start from here
            _this.oneSignal.startInit('302928cf-6636-4ecb-afb0-ec2d30bc08c1', '301809849024');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
            _this.oneSignal.handleNotificationReceived().subscribe(function (data) {
                console.log(data.payload.additionalData);
                _this.updateDb(data.payload.additionalData);
                // alert('notification Recevied');
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                console.log('// do something when a notification is opened');
                alert('notification opens');
            });
            _this.oneSignal.getIds().then(function (ids) {
                //  alert(JSON.stringify(ids));
                localStorage.setItem('DeviceToken', ids.userId);
            });
            _this.oneSignal.endInit();
            // OneSignal code end here
            console.log(_this.network);
            // watch network for a disconnect
            _this.network.onDisconnect().subscribe(function () {
                console.log('Disconnected');
                _this.dataApi.networkStatus = 'Disconnected';
            });
            // watch network for a connection
            _this.network.onConnect().subscribe(function () {
                console.log('Connected');
                _this.dataApi.networkStatus = 'Connected';
            });
            if (_this.network.type !== 'none') {
                console.log('Connected hai');
                _this.dataApi.networkStatus = 'Connected';
            }
        });
    };
    AppComponent.prototype.openPage = function (p) {
        if (p.url === '/catalog') {
            this.router.navigate([p.url, 'view']);
        }
        else if (p.url === '/logout') {
            localStorage.removeItem('Salesman');
            localStorage.removeItem('LoginAs');
            this.router.navigate(['/salesmanlogin']);
        }
        else if (p.url === '/clients') {
            this.router.navigate([p.url, 'view']);
        }
        else {
            this.router.navigate([p.url]);
        }
    };
    AppComponent.prototype.checkPage = function (p) {
        var LoginAs = localStorage.getItem('LoginAs');
        if (LoginAs === 'Client') {
            if (p.url === '/clients') {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: SyncComponent,
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppComponent.prototype.updateDb = function (data) {
        var _this = this;
        console.log('update data here');
        switch (data.Flag) {
            case 'Order':
                this.dataApi.updateDataViaNotification({
                    Id: data.Id,
                    Flag: data.Flag,
                    CompanyID: 1,
                    Voucher_TypeID: 7,
                    StatusID: 2
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            if (data.IsCreated === true) {
                                console.log('Created');
                                _this.fakeApi.setSalesOrder(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else if (data.IsUpdated === true) {
                                console.log('IsUpdated');
                                _this.fakeApi.updateSalesOrder(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log('galat h');
                            }
                        });
                    }
                }).catch(function (exp) {
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
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            if (data.IsCreated) {
                                _this.fakeApi.setInvoicesList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else if (data.IsUpdated) {
                                _this.fakeApi.updateInvoicesList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log('galat h');
                            }
                        });
                    }
                }).catch(function (exp) {
                    console.log(exp);
                });
                break;
            case 'Collection':
                this.dataApi.updateDataViaNotification({
                    Id: data.Id,
                    Flag: data.Flag,
                    CompanyID: 1,
                    StatusID: 1
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            if (data.IsCreated) {
                                _this.fakeApi.setCollectionsList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else if (data.IsUpdated) {
                                _this.fakeApi.updateCollectionsList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log('galat h');
                            }
                        });
                    }
                }).catch(function (exp) {
                    console.log(exp);
                });
                break;
            case 'Client':
                this.dataApi.updateDataViaNotification({
                    Id: data.Id,
                    Flag: data.Flag,
                    CompanyID: 1
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            if (data.IsCreated) {
                                _this.fakeApi.setClientList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else if (data.IsUpdated) {
                                _this.fakeApi.updateClientList(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log('galat h');
                            }
                        });
                    }
                }).catch(function (exp) {
                    console.log(exp);
                });
                break;
            case 'User':
                this.dataApi.updateDataViaNotification({
                    Id: data.Id,
                    Flag: data.Flag
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var element_1 = item.Data;
                        if (data.IsCreated) {
                            if (element_1) {
                                var JsonData = JSON.parse(localStorage.getItem('User'));
                                JsonData.push(element_1);
                                localStorage.setItem('User', JSON.stringify(JsonData));
                            }
                            else {
                                console.log('blank');
                            }
                        }
                        else if (data.IsUpdated) {
                            var JsonData = JSON.parse(localStorage.getItem('User'));
                            var res = JsonData.findIndex(function (x) { return x.Id === element_1.Id; });
                            JsonData[res] = element_1;
                            localStorage.setItem('User', JSON.stringify(JsonData));
                        }
                        else {
                            console.log('galat h');
                        }
                    }
                }).catch(function (exp) {
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
                }).then(function (item) {
                    if (item.ReturnCode === 0) {
                        var rows = item.Data;
                        rows.forEach(function (element) {
                            if (data.IsCreated) {
                                _this.fakeApi.setInventoryItems(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else if (data.IsUpdated) {
                                _this.fakeApi.updateInventoryItems(element)
                                    .then(function (res) {
                                    console.log(res);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log('galat h');
                            }
                        });
                    }
                }).catch(function (exp) {
                    console.log(exp);
                });
                break;
            default:
            // code to be executed if n doesn't match any constant
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Network,
            DataService,
            Router,
            OneSignal,
            PopoverController,
            FakeApiService,
            LocalStorageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map