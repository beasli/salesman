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
var SalesorderItemsPage = /** @class */ (function () {
    function SalesorderItemsPage() {
    }
    SalesorderItemsPage.prototype.ngOnInit = function () {
        this.items = JSON.parse(localStorage.getItem('SalesOrder'));
        // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
        this.header = JSON.parse(this.items.Header);
        this.items = JSON.parse(this.items.Item);
        console.log(this.items);
    };
    SalesorderItemsPage.prototype.totalAmaount = function (items) {
        var amt = 0;
        items.forEach(function (element) {
            amt += element.Amount;
        });
        return amt;
    };
    SalesorderItemsPage = __decorate([
        Component({
            selector: 'app-salesorder-items',
            templateUrl: './salesorder-items.page.html',
            styleUrls: ['./salesorder-items.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], SalesorderItemsPage);
    return SalesorderItemsPage;
}());
export { SalesorderItemsPage };
//# sourceMappingURL=salesorder-items.page.js.map