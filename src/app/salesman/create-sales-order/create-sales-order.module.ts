import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateSalesOrderPage } from './create-sales-order.page';

const routes: Routes = [
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateSalesOrderPage]
})
export class CreateSalesOrderPageModule {}
