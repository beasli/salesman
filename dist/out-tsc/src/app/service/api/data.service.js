var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Events } from '@ionic/angular';
var DataService = /** @class */ (function () {
    function DataService(http, events) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.networkStatus = 'Disconnected';
        console.log('Hello Api DataService ');
        this.apiUrl = localStorage.getItem('apiUrl');
        this.events.subscribe('ApiUrl:Updated', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.apiUrl = localStorage.getItem('apiUrl');
        });
    }
    DataService.prototype.getInventryItem = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/InventryItem/ItemList')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getLookup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Lookup/GetAll')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getCompany = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Company/GetCompany?id=' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/User/GetAll')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getRoles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Role/GetAll')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getCurrency = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Currency/GetAll')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/InventryItem/ItemList')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getSort = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.http.get(this.apiUrl + '/Api/Sort/GetAll?companyId=' + id)
            _this.http.get(_this.apiUrl + '/Api/InventryItem/CountItem?companyId=1&intervalId=2017&itemClassId=1&pageNumber=1&pageSize=10')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.InventryItem = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.http.post(_this.apiUrl +
                '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=1&pageSize=5000', { headers: { 'Content-Type': 'application/json' } })
                // this.getData()
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
                //    let i = 1;
                //    while (i < 9 ) {
                //        if (res[i].Data.length > 0) {
                //         res[0].Data = res[0].Data.concat(res[i].Data);
                //        }
                //     i++;
                //    }
                //     resolve(res[0]);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getData = function () {
        var response = [];
        var response1;
        var i = 1;
        while (i < 9) {
            response1 = this.http
                .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=' + i + '&pageSize=500', { headers: { 'Content-Type': 'application/json' }
            });
            response.push(response1);
            console.log(response1);
            i++;
        }
        return forkJoin(response);
        // const response2 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=2&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response3 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=3&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response4 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=4&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response5 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=5&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response6 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=6&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response7 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=7&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
        // const response8 = this.http
        // .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=8&pageSize=500',
        // { headers: { 'Content-Type': 'application/json' }
        // });
    };
    DataService.prototype.getSalesOrder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/SaleOrder/GetAllByCompany?companyId=1&voucherTypeId=7&statusId=2')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getClientList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/ACC_Account/ClientList?CompanyID=1&pageNumber=1&pageSize=100')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getInvoicesList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Invoice/GetList?CompanyId=1&voucherTypeId=9&StatusId=2&pageNumber=1&PageSize=100')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.uploadSalesOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/Api/SaleOrder/Create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getCollectionsList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Collection/getall?companyId=1&statusId=1')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.uploadCollections = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/Api/Collection/create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.uploadEvent = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/Api/Event/Create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Event/GetAll')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.uploadClient = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/Api/ACC_Account/Create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getItemHistory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/InventryItem/ItemHistory?pageSize=1000&page=1')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getClientSort = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Sort/GetMasterSort?companyId=1')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getClientBalance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/ACC_Account/GetBalanceDetail?CompanyId=1&IntervalId=2017&pageNumber=1&pageSize=1000')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getBank = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/api/bank/getall')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getWarehouse = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/Api/Warehouse/getall?CompanyID=1')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.geturl = function (uri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(uri)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.updateDataViaNotification = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/Api/UpdateRecord/GetByID', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            Events])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map