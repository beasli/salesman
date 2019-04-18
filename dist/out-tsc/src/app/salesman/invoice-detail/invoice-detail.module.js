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
import { InvoiceDetailPage } from './invoice-detail.page';
var routes = [
    {
        path: 'invoice-detail',
        component: InvoiceDetailPage,
        children: [
            {
                path: 'invoice-items',
                loadChildren: '../invoice-items/invoice-items.module#InvoiceItemsPageModule'
            },
            {
                path: 'invoice-header',
                loadChildren: '../invoice-header/invoice-header.module#InvoiceHeaderPageModule'
            },
            {
                path: 'invoice-attachments',
                loadChildren: '../invoice-attachments/invoice-attachments.module#InvoiceAttachmentsPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'invoice-detail/invoice-items',
        pathMatch: 'full'
    }
];
var InvoiceDetailPageModule = /** @class */ (function () {
    function InvoiceDetailPageModule() {
    }
    InvoiceDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [InvoiceDetailPage]
        })
    ], InvoiceDetailPageModule);
    return InvoiceDetailPageModule;
}());
export { InvoiceDetailPageModule };
//# sourceMappingURL=invoice-detail.module.js.map