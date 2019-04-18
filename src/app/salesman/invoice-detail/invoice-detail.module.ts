import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoiceDetailPage } from './invoice-detail.page';

const routes: Routes = [
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoiceDetailPage]
})
export class InvoiceDetailPageModule {}
