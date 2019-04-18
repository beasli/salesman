var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [
                ProgressBarComponent,
                ProductModalComponent,
                CollectionModalComponent,
                SyncComponent,
                SelectableSearchComponent
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
                SelectableSearchComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map