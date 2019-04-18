import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientDetailTabsPage } from './client-detail-tabs.page';

const routes: Routes = [
  {
    path: 'client-detail-tabs',
    component: ClientDetailTabsPage,
    children: [
      {
        path: 'client-general',
        loadChildren: '../client-general/client-general.module#ClientGeneralPageModule'
      },
      {
        path: 'client-spl-price',
        loadChildren: '../client-spl-price/client-spl-price.module#ClientSplPricePageModule'
      },
      {
        path: 'client-attachments',
        loadChildren: '../client-attachments/client-attachments.module#ClientAttachmentsPageModule'
      },
      {
        path: 'client-balance',
        loadChildren: '../client-balance/client-balance.module#ClientBalancePageModule'
      },
      {
        path: 'client-unpaid',
        loadChildren: '../client-unpaid/client-unpaid.module#ClientUnpaidPageModule'
      },
      {
        path: 'client-history',
        loadChildren: '../client-history/client-history.module#ClientHistoryPageModule'
      }
    ]
    },
    {
      path: '',
      redirectTo: 'client-detail-tabs/client-general',
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
  declarations: [ClientDetailTabsPage]
})
export class ClientDetailTabsPageModule {}
