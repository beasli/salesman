import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsCheckCreatePage } from './collections-check-create.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsCheckCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsCheckCreatePage]
})
export class CollectionsCheckCreatePageModule {}
