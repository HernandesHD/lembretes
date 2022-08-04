import { ImportsAngularMaterialModule } from './imports-angular-material/imports-angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import { PriorityPipe } from './pipes/priority.pipe';
import { LembretesFormComponent } from './components/lembretes/lembretes-form/lembretes-form.component';



@NgModule({
  declarations: [
    ErrorPopupComponent,
    PriorityPipe,
    LembretesFormComponent
  ],
  imports: [
    CommonModule,
    ImportsAngularMaterialModule
  ],
  exports: [
    ErrorPopupComponent,
    PriorityPipe,
    LembretesFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
