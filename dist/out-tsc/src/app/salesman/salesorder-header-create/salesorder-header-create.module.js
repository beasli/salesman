var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SalesorderHeaderCreatePage } from './salesorder-header-create.page';
var routes = [
    {
        path: '',
        component: SalesorderHeaderCreatePage
    }
];
var SalesorderHeaderCreatePageModule = /** @class */ (function () {
    function SalesorderHeaderCreatePageModule() {
    }
    SalesorderHeaderCreatePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SalesorderHeaderCreatePage]
        })
    ], SalesorderHeaderCreatePageModule);
    return SalesorderHeaderCreatePageModule;
}());
export { SalesorderHeaderCreatePageModule };
//# sourceMappingURL=salesorder-header-create.module.js.map