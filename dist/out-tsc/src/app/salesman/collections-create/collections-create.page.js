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
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events } from '@ionic/angular';
var CollectionsCreatePage = /** @class */ (function () {
    function CollectionsCreatePage(fakeApi, platform, events) {
        var _this = this;
        this.fakeApi = fakeApi;
        this.platform = platform;
        this.events = events;
        this.Employee = JSON.parse(localStorage.getItem('Salesman'));
        this.Currency = JSON.parse(localStorage.getItem('Currency'));
        this.header = JSON.parse(localStorage.getItem('CollectionsHeader'));
        this.client = JSON.parse(localStorage.getItem('Client'));
        this.Cash = {};
        this.Cheque = {};
        events.subscribe('Collection:updated', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.header = JSON.parse(localStorage.getItem('CollectionsHeader'));
            var cash = _this.header.Cash;
            var cashDebt = 0;
            var cashEqualDebt = 0;
            cash.forEach(function (element) {
                cashDebt += (+element.Debit);
                cashEqualDebt += (+element.Equal_Debit);
            });
            var cheque = _this.header.Cheque;
            var chequeDebt = 0;
            var chequeEqualDebt = 0;
            cheque.forEach(function (element) {
                chequeDebt += (+element.Debit);
                chequeEqualDebt += (+element.Equal_Debit);
            });
            _this.header.RV_Amount = (+cashDebt) + (+chequeDebt);
            _this.header.RV_Equal_Amount = (+cashEqualDebt) + (+chequeEqualDebt);
            localStorage.setItem('CollectionsHeader', JSON.stringify(_this.header));
        });
    }
    CollectionsCreatePage.prototype.ngOnInit = function () {
    };
    CollectionsCreatePage.prototype.submit = function () {
        var a = [this.Cash];
        this.header.Cash.push(a);
        this.header.Cheque.push(this.Cheque);
        console.log(this.header);
    };
    CollectionsCreatePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var condition;
        if (userType === 'Supervisor') {
            condition = 'SupervisorID = ' + Salesman.AccId;
        }
        else if (userType === 'Employee') {
            condition = 'EmployeeID = ' + Salesman.AccId;
        }
        this.fakeApi.getClientList(0, condition).then(function (data) {
            console.log(data.res.rows);
            if (_this.platform.is('cordova')) {
                console.log(data.res.rows.item(0));
                _this.Clients = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.Clients.push(data.res.rows.item(i));
                    }
                }
            }
            else {
                _this.Clients = Object.values(data.res.rows);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    CollectionsCreatePage = __decorate([
        Component({
            selector: 'app-collections-create',
            templateUrl: './collections-create.page.html',
            styleUrls: ['./collections-create.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService,
            Platform,
            Events])
    ], CollectionsCreatePage);
    return CollectionsCreatePage;
}());
export { CollectionsCreatePage };
//# sourceMappingURL=collections-create.page.js.map