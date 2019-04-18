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
import { SalesOrderDetailPage } from './sales-order-detail.page';
var routes = [
    {
        path: 'sales-order-detail',
        component: SalesOrderDetailPage,
        children: [
            {
                path: 'salesorder-items',
                loadChildren: '../salesorder-items/salesorder-items.module#SalesorderItemsPageModule'
            },
            {
                path: 'salesorder-header',
                loadChildren: '../salesorder-header/salesorder-header.module#SalesorderHeaderPageModule'
            },
            {
                path: 'salesorder-attachments',
                loadChildren: '../salesorder-attachments/salesorder-attachments.module#SalesorderAttachmentsPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'sales-order-detail/salesorder-items',
        pathMatch: 'full'
    }
];
var SalesOrderDetailPageModule = /** @class */ (function () {
    function SalesOrderDetailPageModule() {
    }
    SalesOrderDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SalesOrderDetailPage]
        })
    ], SalesOrderDetailPageModule);
    return SalesOrderDetailPageModule;
}());
export { SalesOrderDetailPageModule };
//# sourceMappingURL=sales-order-detail.module.js.map