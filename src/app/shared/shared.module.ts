import { ImportsAngularMaterialModule } from './imports-angular-material/imports-angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import { PriorityPipe } from './pipes/priority.pipe';
import { LembretesFormComponent } from './components/lembretes/lembretes-form/lembretes-form.component';
import { SuccessPopupComponent } from './components/success-popup/success-popup.component';



@NgModule({
  declarations: [
    ErrorPopupComponent,
    PriorityPipe,
    LembretesFormComponent,
    SuccessPopupComponent
  ],
  imports: [
    CommonModule,
    ImportsAngularMaterialModule
  ],
  exports: [
    ErrorPopupComponent,
    PriorityPipe,
    LembretesFormComponent,
    SuccessPopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
