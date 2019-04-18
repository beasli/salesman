import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CollectionModalComponent } from './collection-modal/collection-modal.component';
import { SyncComponent } from './sync/sync.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { SelectableSearchComponent } from './selectable-search/selectable-search.component';
import { BankModalComponent } from './bank-modal/bank-modal.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
    ProductModalComponent,
    CollectionModalComponent,
    SyncComponent,
    SelectableSearchComponent,
    BankModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    IonicSelectableModule
  ],
  exports: [
    ProgressBarComponent,
    ProductModalComponent,
    CollectionModalComponent,
    SyncComponent,
    SelectableSearchComponent,
    BankModalComponent
  ]
})
export class ComponentsModule { }
