import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Lembrete } from './../model/lembrete';
import { LembretesService } from './../services/lembretes.service';

import { ErrorPopupComponent } from '../../shared/components/error-popup/error-popup.component';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.scss']
})
export class LembretesComponent implements OnInit {

  lembretes$: Observable<Lembrete[]>;
  displayedColumns = ['title', 'description', 'priority'];

  //lembretesService: LembretesService;

  constructor(
    private lembretesService: LembretesService,
    public dialog: MatDialog
    ) {
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

  ngOnInit(): void {
  }

}
