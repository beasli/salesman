import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesOrderDetailPage } from './sales-order-detail.page';

const routes: Routes = [
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesOrderDetailPage]
})
export class SalesOrderDetailPageModule {}
