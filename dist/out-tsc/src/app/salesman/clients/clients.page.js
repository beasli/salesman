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
import { Router, ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events } from '@ionic/angular';
var ClientsPage = /** @class */ (function () {
    function ClientsPage(router, fakeApi, platform, route, events) {
        this.router = router;
        this.fakeApi = fakeApi;
        this.platform = platform;
        this.route = route;
        this.events = events;
        this.offset = 0;
        this.search = false;
    }
    ClientsPage.prototype.compare = function (a, b) {
        if (a.last_nom < b.last_nom) {
            return -1;
        }
        if (a.last_nom > b.last_nom) {
            return 1;
        }
        return 0;
    };
    ClientsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
            // for example extract the id..
            console.log(params['type']); // (+) converts string 'id' to a number
            _this.type = params['type'];
        });
    };
    ClientsPage.prototype.ngOnInit = function () {
        // tslint:disable-next-line:max-line-length
        // const objs = [{'name' : 'Radhika', 'age': 20}, {'name' : 'Jessica', 'age': 20}, {'name' : 'Anu', 'age': 20}, {'name' : 'Manu', 'age': 20}];
        // console.log(objs);
        // objs.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
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
        this.fakeApi.getClientList(this.offset, condition).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.clients = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.clients.push(data.res.rows.item(i));
                    }
                }
            }
            else {
                _this.clients = Object.values(data.res.rows);
            }
            _this.offset += 10;
            console.log(_this.clients);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ClientsPage.prototype.loadData = function (event) {
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
        this.fakeApi.getClientList(this.offset, condition).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.clients.push(data.res.rows.item(i));
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
                        _this.clients.push(ele);
                    });
                }
                else {
                    event.target.disabled = true;
                }
            }
            _this.offset += 10;
            console.log('Done');
            event.target.complete();
            console.log(_this.clients);
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
    ClientsPage.prototype.openClientDetail = function (client) {
        localStorage.setItem('Client', JSON.stringify(client));
        this.events.publish('Collection:updated', 1, Date.now());
        this.router.navigate(['/client-detail-tabs']);
    };
    ClientsPage.prototype.toggleSearchBar = function () {
        this.search = !this.search;
        if (!this.search) {
            this.ngOnInit();
        }
    };
    ClientsPage.prototype.searchItem = function (evt) {
        var _this = this;
        console.log(evt.detail.value);
        if (!evt.detail.value) {
            this.ngOnInit();
        }
        else {
            this.fakeApi.getClientListBySearchKeyword('%' + evt.detail.value + '%').then(function (data) {
                if (_this.platform.is('cordova')) {
                    _this.clients = [];
                    if (data.res.rows.length > 0) {
                        for (var i = 0; i < data.res.rows.length; i++) {
                            _this.clients.push(data.res.rows.item(i));
                        }
                    }
                }
                else {
                    _this.clients = Object.values(data.res.rows);
                }
            }).catch(function (exp) {
                console.log('exp', exp);
            });
        }
    };
    ClientsPage.prototype.addClientToSalesOrder = function (client) {
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var Supervisor = 0;
        var Employee = 0;
        if (userType === 'Supervisor') {
            Supervisor = Salesman.AccId;
        }
        else if (userType === 'Employee') {
            Employee = Salesman.AccId;
        }
        var header = {
            CreatedBy: 'ERPEASY',
            Agent: '',
            Rate: 1,
            DeliveryDate: '0001-01-01T00:00:00',
            EmailSentDate: '0001-01-01T00:00:00',
            BillingAddress: '',
            DeliveryAddress: null,
            Taxes: 0,
            Reference: null,
            ClientName: client.ArName,
            Comments: null,
            PrivateComment: null,
            Date: '2019-02-27T00:00:00',
            Currency: '',
            CurrencyID: 1,
            CurrencyRate: 1,
            PaymentOption: null,
            EmployeeId: Employee,
            SupervisorId: Supervisor,
            StatusId: 1,
            RecordAddBy: 'ERPEASY'
        };
        localStorage.setItem('Client', JSON.stringify(client));
        localStorage.setItem('CartHeader', JSON.stringify(header));
        localStorage.setItem('Cart', JSON.stringify([]));
        this.events.publish('cart:updated', 1, Date.now());
        this.router.navigate(['/create-sales-order']);
    };
    ClientsPage.prototype.addClientToCollection = function (client) {
        var userType = localStorage.getItem('LoginAs');
        var Salesman = JSON.parse(localStorage.getItem('Salesman'));
        var Supervisor = 0;
        var Employee = 0;
        if (userType === 'Supervisor') {
            Supervisor = Salesman.AccId;
        }
        else if (userType === 'Employee') {
            Employee = Salesman.AccId;
        }
        var header = {
            EmployeeID: Employee,
            // SupervisorId: Supervisor,
            SupervisorId: 14344,
            CompanyID: 1,
            IntervalID: 2017,
            RV_Details: null,
            CurrencyID: 1,
            ClientID: client.AccID,
            PaymentOption: 0,
            VoucherID: 0,
            StatusId: 1,
            RV_Date: '2019-03-29',
            RV_Amount: 0,
            RV_Equal_Amount: 0,
            EntryBy: Salesman.ArName,
            CreatedOn: '2019-03-29',
            TheRate: 1,
            Note: null,
            Refrence1: null,
            PostDate: '2019-03-29',
            AccId: client.AccID,
            RecordUpdateBy: null,
            Cash: [],
            Cheque: []
        };
        console.log(header);
        localStorage.setItem('Client', JSON.stringify(client));
        localStorage.setItem('CollectionsHeader', JSON.stringify(header));
        this.events.publish('Collection:updated', 1, Date.now());
        this.router.navigate(['/collections-tabs']);
    };
    ClientsPage.prototype.createClient = function () {
        console.log('createClient');
        this.router.navigate(['/client-create']);
    };
    ClientsPage = __decorate([
        Component({
            selector: 'app-clients',
            templateUrl: './clients.page.html',
            styleUrls: ['./clients.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            FakeApiService,
            Platform,
            ActivatedRoute,
            Events])
    ], ClientsPage);
    return ClientsPage;
}());
export { ClientsPage };
//# sourceMappingURL=clients.page.js.map