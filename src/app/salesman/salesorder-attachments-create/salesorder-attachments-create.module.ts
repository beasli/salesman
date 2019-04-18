import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesorderAttachmentsCreatePage } from './salesorder-attachments-create.page';

const routes: Routes = [
  {
    path: '',
    component: SalesorderAttachmentsCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesorderAttachmentsCreatePage]
})
export class SalesorderAttachmentsCreatePageModule {}
