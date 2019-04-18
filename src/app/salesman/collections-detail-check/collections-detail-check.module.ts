import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsDetailCheckPage } from './collections-detail-check.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsDetailCheckPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsDetailCheckPage]
})
export class CollectionsDetailCheckPageModule {}
