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
import { CreateSalesOrderPage } from './create-sales-order.page';
var routes = [
    {
        path: 'create-sales-order',
        component: CreateSalesOrderPage,
        children: [
            {
                path: 'salesorder-items-create',
                loadChildren: '../salesorder-items-create/salesorder-items-create.module#SalesorderItemsCreatePageModule'
            },
            {
                path: 'salesorder-header-create',
                loadChildren: '../salesorder-header-create/salesorder-header-create.module#SalesorderHeaderCreatePageModule'
            },
            {
                path: 'salesorder-attachments-create',
                loadChildren: '../salesorder-attachments-create/salesorder-attachments-create.module#SalesorderAttachmentsCreatePageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'create-sales-order/salesorder-items-create',
        pathMatch: 'full'
    }
];
var CreateSalesOrderPageModule = /** @class */ (function () {
    function CreateSalesOrderPageModule() {
    }
    CreateSalesOrderPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CreateSalesOrderPage]
        })
    ], CreateSalesOrderPageModule);
    return CreateSalesOrderPageModule;
}());
export { CreateSalesOrderPageModule };
//# sourceMappingURL=create-sales-order.module.js.map