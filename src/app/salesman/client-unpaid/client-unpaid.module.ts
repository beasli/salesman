import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientUnpaidPage } from './client-unpaid.page';

const routes: Routes = [
  {
    path: '',
    component: ClientUnpaidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientUnpaidPage]
})
export class ClientUnpaidPageModule {}
