import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsTabsPage } from './collections-tabs.page';

const routes: Routes = [
  {
    path: 'collections-tabs',
    component: CollectionsTabsPage,
    children: [
      {
        path: 'collections-create',
        loadChildren: '../collections-create/collections-create.module#CollectionsCreatePageModule'
      },
      { path: 'collections-check-create',
        loadChildren: '../collections-check-create/collections-check-create.module#CollectionsCheckCreatePageModule'
      },
      {
        path: 'collections-cash-create',
        loadChildren: '../collections-cash-create/collections-cash-create.module#CollectionsCashCreatePageModule'
      }

    ]
  },
  {
    path: '',
    redirectTo: 'collections-tabs/collections-create',
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
  declarations: [CollectionsTabsPage]
})
export class CollectionsTabsPageModule { }
