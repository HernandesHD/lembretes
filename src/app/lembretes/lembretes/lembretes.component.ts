import { SuccessPopupComponent } from './../../shared/components/success-popup/success-popup.component';
import { HttpClient } from '@angular/common/http';
import { ImportsAngularMaterialModule } from './../../shared/imports-angular-material/imports-angular-material.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Lembrete } from './../model/lembrete';
import { LembretesService } from './../services/lembretes.service';

import { ErrorPopupComponent } from '../../shared/components/error-popup/error-popup.component';
import { LembretesFormComponent } from '../../shared/components/lembretes/lembretes-form/lembretes-form.component';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

export interface DialogData {
  title: string;
  description: string;
  priority: string;
}

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.scss']
})
export class LembretesComponent implements OnInit {

  form: FormGroup;

  title: string = "";
  description: string = "";
  priority: string = "";

  lembretes$: Observable<Lembrete[]>;
  displayedColumns = ['title', 'description', 'priority', 'actions'];

  //lembretesService: LembretesService;

  constructor(
    private lembretesService: LembretesService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private location: Location
    ) {

      this.form = this.formBuilder.group({
        title: [null],
        description: [null],
        priority: [null]
      });

    //this.lembretesService = new LembretesService();
    this.lembretes$ = this.lembretesService.listaLembretes()
      .pipe(
        catchError(error => {
          this.showPopUpError('Erro ao carregar lista de lembretes.')
          console.log(error);
          return of([])
        })
      );
  }

  showPopUpError(error: string) {
    this.dialog.open(ErrorPopupComponent, {
      data: error
    });
  }

  showPopUpSuccess(success: string) {
    this.dialog.open(SuccessPopupComponent, {
      data: success
    });
  }

  openDialog(): void {
    debugger
    const dialogRef = this.dialog.open(LembretesFormComponent, {
      width: '500px',
      height: '500px',
      data: this.form
      //data: {title: this.title, description: this.description, priority: this.priority}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result.value.title;
      this.description = result.value.description;
      this.priority = result.value.priority;
      //Save no banco via API
      this.lembretesService.save(result.value)
        .subscribe(data => this.showPopUpSuccess("Lembrete cadastrado com sucesso!!!"),
        error => {
          console.log(error);
          this.showPopUpError('Erro ao salvar lembrete: ' + error.message)
        });
    });
  }

  ngOnInit(): void {

  }

}
