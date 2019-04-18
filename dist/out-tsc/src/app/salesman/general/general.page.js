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
var GeneralPage = /** @class */ (function () {
    function GeneralPage(fakeApi) {
        this.fakeApi = fakeApi;
    }
    GeneralPage.prototype.ngOnInit = function () {
        var _this = this;
        this.item = JSON.parse(localStorage.getItem('Item'));
        this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(function (x) { return x.SortID === _this.item.SortID; }).ArName;
        console.log(this.item);
        console.log(JSON.parse(localStorage.getItem('Sort')).find(function (x) { return x.SortID === _this.item.SortID; }));
    };
    GeneralPage = __decorate([
        Component({
            selector: 'app-general',
            templateUrl: './general.page.html',
            styleUrls: ['./general.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService])
    ], GeneralPage);
    return GeneralPage;
}());
export { GeneralPage };
//# sourceMappingURL=general.page.js.map