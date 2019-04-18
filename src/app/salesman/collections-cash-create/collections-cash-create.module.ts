import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsCashCreatePage } from './collections-cash-create.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsCashCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsCashCreatePage]
})
export class CollectionsCashCreatePageModule {}
