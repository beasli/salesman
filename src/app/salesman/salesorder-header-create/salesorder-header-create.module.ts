import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesorderHeaderCreatePage } from './salesorder-header-create.page';

const routes: Routes = [
  {
    path: '',
    component: SalesorderHeaderCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesorderHeaderCreatePage]
})
export class SalesorderHeaderCreatePageModule {}
