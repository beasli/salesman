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
import { CollectionsTabsPage } from './collections-tabs.page';
var routes = [
    {
        path: 'collections-tabs',
        component: CollectionsTabsPage,
        children: [
            {
                path: 'collections-create',
                loadChildren: '../collections-create/collections-create.module#CollectionsCreatePageModule'
            },
            { path: 'collections-check-create',
                loadChildren: '../collections-check-create/collections-check-create.module#CollectionsCheckCreatePageModule'
            },
            {
                path: 'collections-cash-create',
                loadChildren: '../collections-cash-create/collections-cash-create.module#CollectionsCashCreatePageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'collections-tabs/collections-create',
        pathMatch: 'full'
    }
];
var CollectionsTabsPageModule = /** @class */ (function () {
    function CollectionsTabsPageModule() {
    }
    CollectionsTabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CollectionsTabsPage]
        })
    ], CollectionsTabsPageModule);
    return CollectionsTabsPageModule;
}());
export { CollectionsTabsPageModule };
//# sourceMappingURL=collections-tabs.module.js.map