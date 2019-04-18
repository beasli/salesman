import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesorderAttachmentsPage } from './salesorder-attachments.page';

const routes: Routes = [
  {
    path: '',
    component: SalesorderAttachmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesorderAttachmentsPage]
})
export class SalesorderAttachmentsPageModule {}
