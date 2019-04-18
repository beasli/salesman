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
var ItemStockPage = /** @class */ (function () {
    function ItemStockPage() {
    }
    ItemStockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.item = JSON.parse(localStorage.getItem('Item'));
        this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(function (x) { return x.SortID === String(_this.item.SortID); }).ArName;
        console.log(this.item);
    };
    ItemStockPage = __decorate([
        Component({
            selector: 'app-item-stock',
            templateUrl: './item-stock.page.html',
            styleUrls: ['./item-stock.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], ItemStockPage);
    return ItemStockPage;
}());
export { ItemStockPage };
//# sourceMappingURL=item-stock.page.js.map