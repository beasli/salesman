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
import { ItemDetailPage } from './item-detail.page';
var routes = [
    {
        path: 'item-detail',
        component: ItemDetailPage,
        children: [
            {
                path: 'general',
                loadChildren: '../general/general.module#GeneralPageModule'
            },
            {
                path: 'item-stock',
                loadChildren: '../item-stock/item-stock.module#ItemStockPageModule'
            },
            {
                path: 'item-images',
                loadChildren: '../item-images/item-images.module#ItemImagesPageModule'
            },
            {
                path: 'item-history',
                loadChildren: '../item-history/item-history.module#ItemHistoryPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'item-detail/general',
        pathMatch: 'full'
    }
];
var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ItemDetailPage]
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());
export { ItemDetailPageModule };
//# sourceMappingURL=item-detail.module.js.map