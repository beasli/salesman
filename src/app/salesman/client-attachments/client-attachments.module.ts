import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientAttachmentsPage } from './client-attachments.page';

const routes: Routes = [
  {
    path: '',
    component: ClientAttachmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientAttachmentsPage]
})
export class ClientAttachmentsPageModule {}
