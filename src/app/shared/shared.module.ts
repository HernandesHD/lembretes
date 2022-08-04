import { ImportsAngularMaterialModule } from './imports-angular-material/imports-angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import { PriorityPipe } from './pipes/priority.pipe';



@NgModule({
  declarations: [
    ErrorPopupComponent,
    PriorityPipe
  ],
  imports: [
    CommonModule,
    ImportsAngularMaterialModule
  ],
  exports: [
    ErrorPopupComponent,
    PriorityPipe
  ]
})
export class SharedModule { }
