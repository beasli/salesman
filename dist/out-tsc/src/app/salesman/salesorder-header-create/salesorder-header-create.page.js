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
import { DatePipe } from '@angular/common';
var SalesorderHeaderCreatePage = /** @class */ (function () {
    function SalesorderHeaderCreatePage(datePipe) {
        this.datePipe = datePipe;
        this.Currency = JSON.parse(localStorage.getItem('Currency'));
        var current_date = new Date();
        console.log(this.datePipe.transform(current_date, 'yyyy-MM-dd'));
        this.date = this.datePipe.transform(current_date, 'yyyy-MM-dd');
    }
    SalesorderHeaderCreatePage.prototype.ngOnInit = function () {
        this.header = JSON.parse(localStorage.getItem('CartHeader'));
        this.header.Date = this.date;
        console.log(this.header);
    };
    SalesorderHeaderCreatePage = __decorate([
        Component({
            selector: 'app-salesorder-header-create',
            templateUrl: './salesorder-header-create.page.html',
            styleUrls: ['./salesorder-header-create.page.scss'],
        }),
        __metadata("design:paramtypes", [DatePipe])
    ], SalesorderHeaderCreatePage);
    return SalesorderHeaderCreatePage;
}());
export { SalesorderHeaderCreatePage };
//# sourceMappingURL=salesorder-header-create.page.js.map