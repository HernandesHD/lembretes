import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsAngularMaterialModule } from './../shared/imports-angular-material/imports-angular-material.module';
import { LembretesRoutingModule } from './lembretes-routing.module';
import { LembretesComponent } from './lembretes/lembretes.component';


@NgModule({
  declarations: [
    LembretesComponent
  ],
  imports: [
    CommonModule,
    LembretesRoutingModule,
    ImportsAngularMaterialModule,
    SharedModule,
    MatIconModule
  ]
})
export class LembretesModule { }
