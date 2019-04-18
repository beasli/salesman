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
import { CollectionsDetailPage } from './collections-detail.page';
var routes = [
    {
        path: 'collections-detail',
        component: CollectionsDetailPage,
        children: [
            {
                path: 'collections-detail-header',
                loadChildren: '../collections-detail-header/collections-detail-header.module#CollectionsDetailHeaderPageModule'
            },
            { path: 'collections-detail-check',
                loadChildren: '../collections-detail-check/collections-detail-check.module#CollectionsDetailCheckPageModule'
            },
            {
                path: 'collections-detail-cash',
                loadChildren: '../collections-detail-cash/collections-detail-cash.module#CollectionsDetailCashPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'collections-detail/collections-detail-header',
        pathMatch: 'full'
    }
];
var CollectionsDetailPageModule = /** @class */ (function () {
    function CollectionsDetailPageModule() {
    }
    CollectionsDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CollectionsDetailPage]
        })
    ], CollectionsDetailPageModule);
    return CollectionsDetailPageModule;
}());
export { CollectionsDetailPageModule };
//# sourceMappingURL=collections-detail.module.js.map