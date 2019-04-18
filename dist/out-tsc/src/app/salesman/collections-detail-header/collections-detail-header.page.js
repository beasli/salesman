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
var CollectionsDetailHeaderPage = /** @class */ (function () {
    function CollectionsDetailHeaderPage() {
        this.header = JSON.parse(localStorage.getItem('Collection'));
    }
    CollectionsDetailHeaderPage.prototype.ngOnInit = function () {
        console.log(this.header);
    };
    CollectionsDetailHeaderPage = __decorate([
        Component({
            selector: 'app-collections-detail-header',
            templateUrl: './collections-detail-header.page.html',
            styleUrls: ['./collections-detail-header.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], CollectionsDetailHeaderPage);
    return CollectionsDetailHeaderPage;
}());
export { CollectionsDetailHeaderPage };
//# sourceMappingURL=collections-detail-header.page.js.map