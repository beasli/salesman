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
import { Platform } from '@ionic/angular';
var ClientBalancePage = /** @class */ (function () {
    function ClientBalancePage(fakeApi, platform) {
        this.fakeApi = fakeApi;
        this.platform = platform;
    }
    ClientBalancePage.prototype.ngOnInit = function () {
    };
    ClientBalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.clients = JSON.parse(localStorage.getItem('Client'));
        // this.clients = JSON.parse(this.clients.Balance);
        // this.clients.AccID = 4;
        console.log(this.clients.AccID);
        this.fakeApi.getClientBalance(this.clients.AccID).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.clients = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.clients.push(data.res.rows.item(i));
                    }
                }
                //   this.offset += 10;
            }
            else {
                _this.clients = Object.values(data.res.rows);
            }
            console.log(_this.clients);
        }).catch(function (err) {
            console.log(err);
        });
        console.log(this.clients);
    };
    ClientBalancePage = __decorate([
        Component({
            selector: 'app-client-balance',
            templateUrl: './client-balance.page.html',
            styleUrls: ['./client-balance.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService,
            Platform])
    ], ClientBalancePage);
    return ClientBalancePage;
}());
export { ClientBalancePage };
//# sourceMappingURL=client-balance.page.js.map