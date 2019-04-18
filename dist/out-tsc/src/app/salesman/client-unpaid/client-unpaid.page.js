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
var ClientUnpaidPage = /** @class */ (function () {
    function ClientUnpaidPage() {
    }
    ClientUnpaidPage.prototype.ngOnInit = function () {
        this.clients = JSON.parse(localStorage.getItem('Client'));
        this.clients = JSON.parse(this.clients.UnPaid);
        console.log(this.clients);
    };
    ClientUnpaidPage = __decorate([
        Component({
            selector: 'app-client-unpaid',
            templateUrl: './client-unpaid.page.html',
            styleUrls: ['./client-unpaid.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], ClientUnpaidPage);
    return ClientUnpaidPage;
}());
export { ClientUnpaidPage };
//# sourceMappingURL=client-unpaid.page.js.map