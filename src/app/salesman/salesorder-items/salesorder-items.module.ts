import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesorderItemsPage } from './salesorder-items.page';

const routes: Routes = [
  {
    path: '',
    component: SalesorderItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesorderItemsPage]
})
export class SalesorderItemsPageModule {}
