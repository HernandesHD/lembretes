import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ErrorPopupComponent } from '../../error-popup/error-popup.component';
import { SuccessPopupComponent } from '../../success-popup/success-popup.component';
import { LembretesComponent } from './../../../../lembretes/lembretes/lembretes.component';
import { Lembrete } from './../../../../lembretes/model/lembrete';
import { LembretesService } from './../../../../lembretes/services/lembretes.service';

export interface DialogData {
  title: string;
  description: string;
  priority: string;
}

@Component({
  selector: 'app-lembretes-form',
  templateUrl: './lembretes-form.component.html',
  styleUrls: ['./lembretes-form.component.scss']
})
export class LembretesFormComponent implements OnInit {

  form: FormGroup;

  selectedChoice : string = "";

  constructor(
    public dialogRef: MatDialogRef<LembretesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Lembrete,
    private formBuilder: FormBuilder,
    private lembretesService: LembretesService,
    public dialog: MatDialog,
    ) {

      this.form = this.formBuilder.group({
        title: [null],
        description: [null],
        priority: [null]
      });

    }


  ngOnInit(): void {
      this.fetchItem();

      this.form = this.formBuilder.group({
        title: [null, Validators.required],
        description: [null, Validators.required],
        priority: [null, Validators.required]
      });
  }

  fetchItem() {
    if (!this.data.editMode) {
      return;
    }
    this.form.patchValue(this.data);
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(form: FormGroup): void {
    this.lembretesService.save(form.value)
        .subscribe(data => this.showPopUpSuccess("Lembrete cadastrado com sucesso!!!"),
        error => {
          console.log(error);
          this.showPopUpError('Erro ao salvar lembrete: ' + error.message)
        });
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

  update(form: FormGroup): void {
    this.lembretesService.edit(form.value)
      .subscribe(data => this.showPopUpSuccess("Lembrete editado com sucesso!!!"),
      error => {
        console.log(error);
        this.showPopUpError('Erro ao editar lembrete: ' + error.message)
      });
  }

}
