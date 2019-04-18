import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsDetailHeaderPage } from './collections-detail-header.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsDetailHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsDetailHeaderPage]
})
export class CollectionsDetailHeaderPageModule {}
