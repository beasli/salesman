import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsDetailPage } from './collections-detail.page';

const routes: Routes = [
  {
    path: 'collections-detail',
    component: CollectionsDetailPage,
    children: [
      {
        path: 'collections-detail-header',
        loadChildren: '../collections-detail-header/collections-detail-header.module#CollectionsDetailHeaderPageModule'
      },
      { path: 'collections-detail-check',
        loadChildren: '../collections-detail-check/collections-detail-check.module#CollectionsDetailCheckPageModule'
      },
      {
        path: 'collections-detail-cash',
        loadChildren: '../collections-detail-cash/collections-detail-cash.module#CollectionsDetailCashPageModule'
      }

    ]
  },
  {
    path: '',
    redirectTo: 'collections-detail/collections-detail-header',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsDetailPage]
})
export class CollectionsDetailPageModule {}
