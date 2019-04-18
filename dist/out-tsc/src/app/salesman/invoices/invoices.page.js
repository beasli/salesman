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
var InvoicesPage = /** @class */ (function () {
    function InvoicesPage(route, fakeApi, router, platform) {
        this.route = route;
        this.fakeApi = fakeApi;
        this.router = router;
        this.platform = platform;
        this.offset = 0;
    }
    InvoicesPage.prototype.ngOnInit = function () {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition;
        if (userType === 'Supervisor') {
            condition = 'SupervisorID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
        }
        else if (userType === 'Employee') {
            condition = 'EmployeeID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
        }
        condition = 'StatusName = "Posted"';
        this.fakeApi.getInvoicesList(this.offset, condition).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.items = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        data.res.rows.item(i).ClientDetail = JSON.parse(data.res.rows.item(i).ClientDetail);
                        _this.items.push(data.res.rows.item(i));
                    }
                }
                _this.offset += 10;
            }
            else {
                _this.items = Object.values(data.res.rows);
                if (_this.items.length > 0) {
                    _this.items.forEach(function (ele) {
                        ele.ClientDetail = JSON.parse(ele.ClientDetail);
                    });
                }
            }
            console.log(_this.items);
        }).catch(function (err) {
            console.log(err);
        });
    };
    InvoicesPage.prototype.loadData = function (event) {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition;
        if (userType === 'Supervisor') {
            condition = 'SupervisorID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
        }
        else if (userType === 'Employee') {
            condition = 'EmployeeID = ' + Salesman.AccId + ' AND StatusName = "Posted"';
        }
        condition = 'StatusName = "Posted"';
        this.fakeApi.getInvoicesList(this.offset, condition).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        data.res.rows.item(i).ClientDetail = JSON.parse(data.res.rows.item(i).ClientDetail);
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
                        ele.ClientDetail = JSON.parse(ele.ClientDetail);
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
    InvoicesPage.prototype.openDetail = function (ItemId) {
        localStorage.setItem('Invoice', JSON.stringify(ItemId));
        this.router.navigate(['/invoice-detail']);
    };
    InvoicesPage.prototype.invoiceTotal = function (item) {
        var price = 0;
        item = JSON.parse(item);
        item.forEach(function (element) {
            price += element.Price;
        });
        return price;
    };
    InvoicesPage.prototype.getClientName = function (clnt) {
        clnt = JSON.parse(clnt);
        return clnt.ArName;
    };
    InvoicesPage = __decorate([
        Component({
            selector: 'app-invoices',
            templateUrl: './invoices.page.html',
            styleUrls: ['./invoices.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FakeApiService,
            Router,
            Platform])
    ], InvoicesPage);
    return InvoicesPage;
}());
export { InvoicesPage };
//# sourceMappingURL=invoices.page.js.map