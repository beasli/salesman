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
var CollectionsPage = /** @class */ (function () {
    function CollectionsPage(route, fakeApi, router, platform) {
        this.route = route;
        this.fakeApi = fakeApi;
        this.router = router;
        this.platform = platform;
        this.offset = 0;
    }
    CollectionsPage.prototype.ionViewDidEnter = function () {
        //  this.ionViewDidEnter();
    };
    CollectionsPage.prototype.ngOnInit = function () {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition;
        if (userType === 'Supervisor') {
            condition = 'Collections.SupervisorID = ' + Salesman.AccId + ' OR Collections.EmployeeID = ' + Salesman.AccId;
        }
        else if (userType === 'Employee') {
            condition = 'Collections.EmployeeID = ' + Salesman.AccId;
        }
        this.fakeApi.getCollectionsList(this.offset, condition).then(function (data) {
            console.log(data.res.rows.item(0));
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
            if (data.res.rows.length === 10) {
                _this.offset += 10;
            }
            else {
                _this.offset += data.res.rows.length;
            }
            console.log(_this.items);
        }).catch(function (err) {
            console.log(err);
        });
    };
    CollectionsPage.prototype.loadData = function (event) {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition;
        if (userType === 'Supervisor') {
            condition = 'Collections.SupervisorID = ' + Salesman.AccId + ' OR Collections.EmployeeID = ' + Salesman.AccId;
        }
        else if (userType === 'Employee') {
            condition = 'Collections.EmployeeID = ' + Salesman.AccId;
        }
        this.fakeApi.getCollectionsList(this.offset, condition).then(function (data) {
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
    CollectionsPage.prototype.openDetail = function (ItemId) {
        localStorage.setItem('Collection', JSON.stringify(ItemId));
        this.router.navigate(['/collections-detail']);
    };
    CollectionsPage.prototype.createSalesOrder = function () {
        // localStorage.setItem('SalesOrder', JSON.stringify(ItemId));
        // collections-tabs
        this.router.navigate(['/clients', 'add-clns']);
    };
    CollectionsPage.prototype.invoiceTotal = function (item) {
        var price = 0;
        item = JSON.parse(item);
        item.forEach(function (element) {
            price += element.Price;
        });
        return price;
    };
    CollectionsPage = __decorate([
        Component({
            selector: 'app-collections',
            templateUrl: './collections.page.html',
            styleUrls: ['./collections.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FakeApiService,
            Router,
            Platform])
    ], CollectionsPage);
    return CollectionsPage;
}());
export { CollectionsPage };
//# sourceMappingURL=collections.page.js.map