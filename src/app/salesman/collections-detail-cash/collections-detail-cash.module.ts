import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsDetailCashPage } from './collections-detail-cash.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsDetailCashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsDetailCashPage]
})
export class CollectionsDetailCashPageModule {}
