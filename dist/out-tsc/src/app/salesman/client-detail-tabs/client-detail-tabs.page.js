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
var ClientDetailTabsPage = /** @class */ (function () {
    function ClientDetailTabsPage() {
    }
    ClientDetailTabsPage.prototype.ngOnInit = function () {
    };
    ClientDetailTabsPage = __decorate([
        Component({
            selector: 'app-client-detail-tabs',
            templateUrl: './client-detail-tabs.page.html',
            styleUrls: ['./client-detail-tabs.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], ClientDetailTabsPage);
    return ClientDetailTabsPage;
}());
export { ClientDetailTabsPage };
//# sourceMappingURL=client-detail-tabs.page.js.map