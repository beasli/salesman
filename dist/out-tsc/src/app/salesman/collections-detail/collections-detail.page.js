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
var CollectionsDetailPage = /** @class */ (function () {
    function CollectionsDetailPage() {
    }
    CollectionsDetailPage.prototype.ngOnInit = function () {
        this.header = JSON.parse(localStorage.getItem('Collection'));
        // this.item.Sort = JSON.parse(localStorage.getItem('Sort')).find(x => x.SortID === String(this.item.SortID)).ArName;
        this.header.Cash = JSON.parse(this.header.Cash);
        this.header.Cheque = JSON.parse(this.header.Cheque);
        console.log(this.header);
    };
    CollectionsDetailPage = __decorate([
        Component({
            selector: 'app-collections-detail',
            templateUrl: './collections-detail.page.html',
            styleUrls: ['./collections-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], CollectionsDetailPage);
    return CollectionsDetailPage;
}());
export { CollectionsDetailPage };
//# sourceMappingURL=collections-detail.page.js.map