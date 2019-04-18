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
import { LoadingController, Events } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';
var CreateSalesOrderPage = /** @class */ (function () {
    function CreateSalesOrderPage(api, loadingCtrl, fakeApi, router, events, dataApi) {
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.fakeApi = fakeApi;
        this.router = router;
        this.events = events;
        this.dataApi = dataApi;
    }
    CreateSalesOrderPage.prototype.ngOnInit = function () {
    };
    CreateSalesOrderPage.prototype.uploadSalesOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, client, itemArr, data;
            var _this = this;
            return __generator(this, function (_a) {
                items = JSON.parse(localStorage.getItem('Cart'));
                client = JSON.parse(localStorage.getItem('Client'));
                itemArr = [];
                items.forEach(function (element) {
                    var temp = {
                        Id: element.item.ItemID,
                        ItemClassId: 0,
                        ArName: element.item.ArName,
                        EnName: element.item.EnName,
                        Description: element.item.Description,
                        Price: element.item.Price,
                        Quantity: element.Qty,
                        Amount: element.item.Price * element.Qty,
                        Total: element.item.Price * element.Qty,
                        Discount: 0,
                        WarehouseID: element.item.WarehouseID,
                        UnitID: element.item.UnitID
                    };
                    itemArr.push(temp);
                });
                data = {
                    AccID: client.AccID,
                    Amount: this.totalAmaount(itemArr),
                    ArAccount: client.ArName,
                    CompanyID: 1,
                    Date: '2019-02-27T00:00:00',
                    EnAccount: client.EnName,
                    EntryBy: 'ERPEASYAPP',
                    InertvalID: 2017,
                    Note: null,
                    Status: '',
                    //  VoucherID: 331,
                    VoucherType: 7,
                    TotalPreDiscount: 50,
                    Item: itemArr,
                    Header: JSON.parse(localStorage.getItem('CartHeader'))
                };
                console.log(data);
                this.api.uploadSalesOrder(data).then(function (res) {
                    console.log(res.Data);
                    _this.dataApi.updateDataViaNotification({
                        Id: res.Data.VoucherID,
                        Flag: 'Order',
                        CompanyID: 1,
                        Voucher_TypeID: 7,
                        StatusID: 2
                    }).then(function (item) {
                        if (item.ReturnCode === 0) {
                            var rows = item.Data;
                            rows.forEach(function (element) {
                                console.log('Created');
                                _this.fakeApi.setSalesOrder(element)
                                    .then(function (responce) {
                                    console.log(responce);
                                    _this.events.publish('SalesorderUpdated:updated', 1, Date.now());
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            });
                        }
                    }).catch(function (exp) {
                        console.log(exp);
                    });
                    /*
                    this.api.getSalesOrder().then((item: any) => {
                      if (item.ReturnCode === 0) {
                        const rows = item.Data;
                        rows.forEach(element => {
                          this.fakeApi.setSalesOrder(element)
                            .then(resa => {
                              console.log(resa);
                              this.events.publish('SalesorderUpdated:updated', 1, Date.now());
                            })
                            .catch(err => {
                              // loading.dismiss();
                            });
                        });
                      } else {
                        // loading.dismiss();
                        console.log('something went wrong');
                      }
                    }).catch(e => {
                      // loading.dismiss();
                      console.log('something went wrong');
                    });
                    */
                }, function (err) {
                    // loading.dismiss();
                    console.log(err);
                });
                localStorage.setItem('CartHeader', '');
                localStorage.setItem('Cart', '');
                this.events.publish('cart:updated', 1, Date.now());
                this.router.navigate(['/sales-order-list']);
                return [2 /*return*/];
            });
        });
    };
    CreateSalesOrderPage.prototype.totalAmaount = function (items) {
        var amt = 0;
        // console.log(this.items);
        // tslint:disable-next-line:forin
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var k = items_1[_i];
            //  if (this.items.hasOwnProperty(k)) {
            //    amt += this.items[k].item.Price *  this.items[k].Qty;
            //  }
            amt += k.Amount;
        }
        return amt;
    };
    CreateSalesOrderPage = __decorate([
        Component({
            selector: 'app-create-sales-order',
            templateUrl: './create-sales-order.page.html',
            styleUrls: ['./create-sales-order.page.scss'],
        }),
        __metadata("design:paramtypes", [DataService,
            LoadingController,
            FakeApiService,
            Router,
            Events,
            DataService])
    ], CreateSalesOrderPage);
    return CreateSalesOrderPage;
}());
export { CreateSalesOrderPage };
//# sourceMappingURL=create-sales-order.page.js.map