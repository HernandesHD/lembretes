import { SharedModule } from './../../../shared.module';
import { LembretesComponent } from './../../../../lembretes/lembretes/lembretes.component';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

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

  //form: FormGroup;

  selectedChoice : string = "";

  constructor(
    public dialogRef: MatDialogRef<LembretesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private formBuilder: FormBuilder
    ) {

      /*this.form = this.formBuilder.group({
        title: [null],
        description: [null],
        priority: [null]
      });*/

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
