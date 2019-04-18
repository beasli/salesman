var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';
var OrderUploadPage = /** @class */ (function () {
    function OrderUploadPage(route, fakeApi, router, platform) {
        this.route = route;
        this.fakeApi = fakeApi;
        this.router = router;
        this.platform = platform;
        this.offset = 0;
        this.search = false;
    }
    OrderUploadPage.prototype.ngOnInit = function () {
        var _this = this;
        this.offset = 0;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition0;
        if (userType === 'Supervisor') {
            condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
        }
        else if (userType === 'Employee') {
            condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
        }
        this.fakeApi.getSalesOrder(this.offset, condition0).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.items = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.items.push(data.res.rows.item(i));
                    }
                }
                _this.offset += 10;
            }
            else {
                _this.items = Object.values(data.res.rows);
            }
            console.log(_this.items);
        }).catch(function (err) {
            console.log(err);
        });
    };
    OrderUploadPage.prototype.loadData = function (event) {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition0;
        if (userType === 'Supervisor') {
            condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2)';
        }
        else if (userType === 'Employee') {
            condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending" AND UploadStatusID  in (99, 2)';
        }
        this.fakeApi.getSalesOrder(this.offset, condition0).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.items.push(data.res.rows.item(i));
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
            else {
                var items = Object.values(data.res.rows);
                if (items.length > 0) {
                    items.forEach(function (ele) {
                        _this.items.push(ele);
                    });
                }
                else {
                    event.target.disabled = true;
                }
            }
            _this.offset += 10;
            console.log('Done');
            event.target.complete();
            console.log(_this.items);
        }).catch(function (err) {
            event.target.disabled = true;
            console.log(err);
        });
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        // if (data.length == 1000) {
        //   event.target.disabled = true;
        // }
    };
    OrderUploadPage.prototype.openDetail = function (ItemId) {
        localStorage.setItem('SalesOrder', JSON.stringify(ItemId));
        this.router.navigate(['/sales-order-detail']);
    };
    OrderUploadPage.prototype.invoiceTotal = function (item) {
        var price = 0;
        item = JSON.parse(item);
        item.forEach(function (element) {
            price += element.Price;
        });
        return price;
    };
    OrderUploadPage.prototype.toggleSearchBar = function () {
        this.search = !this.search;
        if (!this.search) {
            this.ngOnInit();
        }
    };
    OrderUploadPage.prototype.searchItem = function (evt) {
        var _this = this;
        console.log(evt.detail.value);
        if (!evt.detail.value) {
            this.ngOnInit();
        }
        else {
            var userType = localStorage.getItem('LoginAs');
            var Salesman = JSON.parse(localStorage.getItem('Salesman'));
            var condition0 = void 0;
            if (userType === 'Supervisor') {
                // tslint:disable-next-line:max-line-length
                condition0 = 'SupervisorID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2) AND ArAccount LIKE "%' + evt.detail.value + '%"';
            }
            else if (userType === 'Employee') {
                // tslint:disable-next-line:max-line-length
                condition0 = 'EmployeeID = ' + Salesman.AccId + ' AND EnglishStatus = "Posted - Pending"  AND UploadStatusID  in (99,2) AND ArAccount LIKE "%' + evt.detail.value + '%"';
            }
            this.fakeApi.getSalesOrderBySearchKeyword(condition0).then(function (data) {
                if (_this.platform.is('cordova')) {
                    _this.items = [];
                    if (data.res.rows.length > 0) {
                        for (var i = 0; i < data.res.rows.length; i++) {
                            _this.items.push(data.res.rows.item(i));
                        }
                    }
                }
                else {
                    _this.items = Object.values(data.res.rows);
                }
            }).catch(function (exp) {
                console.log('exp', exp);
            });
        }
    };
    OrderUploadPage.prototype.Currency = function (hdr) {
        var crny = JSON.parse(hdr);
        return crny.Currency;
    };
    OrderUploadPage = __decorate([
        Component({
            selector: 'app-order-upload',
            templateUrl: './order-upload.page.html',
            styleUrls: ['./order-upload.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FakeApiService,
            Router,
            Platform])
    ], OrderUploadPage);
    return OrderUploadPage;
}());
export { OrderUploadPage };
//# sourceMappingURL=order-upload.page.js.map