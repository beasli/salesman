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
var InvoiceItemsPage = /** @class */ (function () {
    function InvoiceItemsPage() {
    }
    InvoiceItemsPage.prototype.ngOnInit = function () {
        this.items = JSON.parse(localStorage.getItem('Invoice'));
        this.invoice = this.items;
        // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
        this.items = JSON.parse(this.items.Item);
        console.log(this.items);
    };
    InvoiceItemsPage.prototype.totalAmaount = function (items) {
        var amt = 0;
        items.forEach(function (element) {
            amt += element.Amount;
        });
        return amt;
    };
    InvoiceItemsPage = __decorate([
        Component({
            selector: 'app-invoice-items',
            templateUrl: './invoice-items.page.html',
            styleUrls: ['./invoice-items.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceItemsPage);
    return InvoiceItemsPage;
}());
export { InvoiceItemsPage };
//# sourceMappingURL=invoice-items.page.js.map