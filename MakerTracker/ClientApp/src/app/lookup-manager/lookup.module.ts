import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '../material/material.module';
import { ButtonColumnComponent } from './column-types/button-column/button-column.component';
import { LookupEditorComponent } from './edit/lookup-editor.component';
import { LookupListComponent } from './list/lookup-list.component';
import { LOOKUP_MODELS } from './lookup-model-provider.service';
import { LOOKUP_ROUTES } from './lookup.routes';
import { EquipmentModel } from './models/equipment.model';
import { ProductTypeModel } from './models/product-type.model';
import { ProductModel } from './models/product.model';
import { RequestorListModel } from './models/requestor.model';
import { SupplierListModel } from './models/supplier.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(LOOKUP_ROUTES),
    AgGridModule.withComponents([ButtonColumnComponent])
  ],

  declarations: [LookupListComponent, LookupEditorComponent, ButtonColumnComponent],
  providers: [
    { provide: LOOKUP_MODELS, useClass: RequestorListModel, multi: true },
    { provide: LOOKUP_MODELS, useClass: SupplierListModel, multi: true },
    { provide: LOOKUP_MODELS, useClass: ProductTypeModel, multi: true },
    { provide: LOOKUP_MODELS, useClass: ProductModel, multi: true },
    { provide: LOOKUP_MODELS, useClass: EquipmentModel, multi: true }
  ],
  exports: []
})
export class LookupModule {}
