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
var ItemHistoryPage = /** @class */ (function () {
    function ItemHistoryPage(fakeApi, platform) {
        this.fakeApi = fakeApi;
        this.platform = platform;
        this.offset = 0;
        this.status = 'Posted';
    }
    ItemHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('fejje');
        this.item = JSON.parse(localStorage.getItem('Item'));
        this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(function (x) { return x.SortID === _this.item.SortID; }).ArName;
        // this.item = JSON.parse(this.item.History);
        console.log(this.item);
        this.offset = 0;
        this.fakeApi.getItemHistory(this.item.ItemID, this.status, this.offset).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.item = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.item.push(data.res.rows.item(i));
                    }
                }
                _this.offset += 10;
            }
            else {
                _this.item = Object.values(data.res.rows);
            }
            console.log(_this.item);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ItemHistoryPage = __decorate([
        Component({
            selector: 'app-item-history',
            templateUrl: './item-history.page.html',
            styleUrls: ['./item-history.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService,
            Platform])
    ], ItemHistoryPage);
    return ItemHistoryPage;
}());
export { ItemHistoryPage };
//# sourceMappingURL=item-history.page.js.map