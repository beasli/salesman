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
import { ClientDetailTabsPage } from './client-detail-tabs.page';
var routes = [
    {
        path: 'client-detail-tabs',
        component: ClientDetailTabsPage,
        children: [
            {
                path: 'client-general',
                loadChildren: '../client-general/client-general.module#ClientGeneralPageModule'
            },
            {
                path: 'client-spl-price',
                loadChildren: '../client-spl-price/client-spl-price.module#ClientSplPricePageModule'
            },
            {
                path: 'client-attachments',
                loadChildren: '../client-attachments/client-attachments.module#ClientAttachmentsPageModule'
            },
            {
                path: 'client-balance',
                loadChildren: '../client-balance/client-balance.module#ClientBalancePageModule'
            },
            {
                path: 'client-unpaid',
                loadChildren: '../client-unpaid/client-unpaid.module#ClientUnpaidPageModule'
            },
            {
                path: 'client-history',
                loadChildren: '../client-history/client-history.module#ClientHistoryPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'client-detail-tabs/client-general',
        pathMatch: 'full'
    }
];
var ClientDetailTabsPageModule = /** @class */ (function () {
    function ClientDetailTabsPageModule() {
    }
    ClientDetailTabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ClientDetailTabsPage]
        })
    ], ClientDetailTabsPageModule);
    return ClientDetailTabsPageModule;
}());
export { ClientDetailTabsPageModule };
//# sourceMappingURL=client-detail-tabs.module.js.map