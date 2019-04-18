import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoiceAttachmentsPage } from './invoice-attachments.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAttachmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoiceAttachmentsPage]
})
export class InvoiceAttachmentsPageModule {}
