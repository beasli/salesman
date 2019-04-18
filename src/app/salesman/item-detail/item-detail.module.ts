import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPage } from './item-detail.page';

const routes: Routes = [
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemDetailPage]
})
export class ItemDetailPageModule {}
