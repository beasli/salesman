import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientSplPricePage } from './client-spl-price.page';

const routes: Routes = [
  {
    path: '',
    component: ClientSplPricePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientSplPricePage]
})
export class ClientSplPricePageModule {}
