import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesorderHeaderPage } from './salesorder-header.page';

const routes: Routes = [
  {
    path: '',
    component: SalesorderHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesorderHeaderPage]
})
export class SalesorderHeaderPageModule {}
