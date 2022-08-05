import { ImportsAngularMaterialModule } from './../../shared/imports-angular-material/imports-angular-material.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Lembrete } from './../model/lembrete';
import { LembretesService } from './../services/lembretes.service';

import { ErrorPopupComponent } from '../../shared/components/error-popup/error-popup.component';
import { LembretesFormComponent } from '../../shared/components/lembretes/lembretes-form/lembretes-form.component';

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

  title: string = "";
  description: string = "";
  priority: string = "";

  lembretes$: Observable<Lembrete[]>;
  displayedColumns = ['title', 'description', 'priority', 'actions'];

  constructor(
    private lembretesService: LembretesService,
    public dialog: MatDialog,
    ) {

      this.lembretes$ = this.lembretesService.listaLembretes()
      .pipe(
        catchError(error => {
          this.showPopUpError('Erro ao carregar lista de lembretes.')
          console.log(error);
          return of([])
        })
      );

  }

  ngOnInit(): void {
  }

  showPopUpError(error: string) {
    this.dialog.open(ErrorPopupComponent, {
      data: error
    });
  }

  openDialog(lembrete?: Lembrete, editMode?: boolean): void {
    lembrete = {
      ...lembrete,
      editMode
    }

    const dialogRef = this.dialog.open(LembretesFormComponent, {
      width: '500px',
      height: '500px',
      data: lembrete
    });
  }

  delete(lembrete: Lembrete) {
    this.lembretesService.delete(lembrete)
      .subscribe(arg => {this.lembretesService.listaLembretes().pipe()});
    ;
  }

}
