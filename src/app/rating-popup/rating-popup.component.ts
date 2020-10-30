import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.scss'],
})
export class RatingPopupComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  ratingVal: number = 0;
  hoveredVal: number = null;

  showErrMsg = false;

  numbers = Array(5)
    .fill(null)
    .map((num, i) => i + 1);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { msg: string },
    private dialogRef: MatDialogRef<RatingPopupComponent>
  ) {}

  ngOnInit(): void {}

  close(type?: string): void {
    if (type === 'confirm') {
      if (this.ratingVal) this.dialogRef.close(this.ratingVal);
      else this.showErrMsg = true;
    } else if (type === 'cancel') this.dialogRef.close();
  }
}
