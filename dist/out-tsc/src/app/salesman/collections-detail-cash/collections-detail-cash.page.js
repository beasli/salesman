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
var CollectionsDetailCashPage = /** @class */ (function () {
    function CollectionsDetailCashPage() {
        //  this.header = JSON.parse(this.header.Cash);
    }
    CollectionsDetailCashPage.prototype.ngOnInit = function () {
        this.header = JSON.parse(localStorage.getItem('Collection'));
        // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
        this.header.Cash = JSON.parse(this.header.Cash);
        this.header.Cheque = JSON.parse(this.header.Cheque);
        console.log(this.header);
    };
    CollectionsDetailCashPage = __decorate([
        Component({
            selector: 'app-collections-detail-cash',
            templateUrl: './collections-detail-cash.page.html',
            styleUrls: ['./collections-detail-cash.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], CollectionsDetailCashPage);
    return CollectionsDetailCashPage;
}());
export { CollectionsDetailCashPage };
//# sourceMappingURL=collections-detail-cash.page.js.map