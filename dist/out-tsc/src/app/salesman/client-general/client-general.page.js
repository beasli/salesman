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
import { Events } from '@ionic/angular';
var ClientGeneralPage = /** @class */ (function () {
    function ClientGeneralPage(fakeApi, events) {
        var _this = this;
        this.fakeApi = fakeApi;
        this.events = events;
        this.events.subscribe('Client:updated', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.client = JSON.parse(localStorage.getItem('Client'));
        });
    }
    ClientGeneralPage.prototype.ngOnInit = function () {
    };
    ClientGeneralPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('tmkb');
        this.client = JSON.parse(localStorage.getItem('Client'));
        console.log(this.client);
        this.fakeApi.getClientSort(this.client.SortID).then(function (data) {
            console.log(data.res.rows.item(0));
            _this.sort = data.res.rows.item(0);
        }).catch(function (err) {
            console.log(err);
        });
        console.log(this.client);
    };
    ClientGeneralPage = __decorate([
        Component({
            selector: 'app-client-general',
            templateUrl: './client-general.page.html',
            styleUrls: ['./client-general.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService,
            Events])
    ], ClientGeneralPage);
    return ClientGeneralPage;
}());
export { ClientGeneralPage };
//# sourceMappingURL=client-general.page.js.map