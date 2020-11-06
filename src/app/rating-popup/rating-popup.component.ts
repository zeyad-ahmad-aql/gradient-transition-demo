import { HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.scss'],
})
export class RatingPopupComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-inferrable-types
  ratingVal: number = 0;
  hoveredVal: number = null;

  showErrMsg = false;

  numbers = Array(5)
    .fill(null)
    .map((num, i) => i + 1);

  messagesRow: HTMLDivElement;
  ratingRows: HTMLCollectionOf<HTMLDivElement>;

  subscriptionsArr: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { msg: string },
    private matDialogRef: MatDialogRef<RatingPopupComponent>
  ) {}

  ngOnInit(): void {
    this.subscriptionsArr.push(
      this.matDialogRef.afterOpened().subscribe(() => {
        this.messagesRow = document.getElementById(
          'rating-message-row'
        ) as HTMLDivElement;
        this.ratingRows = document.getElementsByClassName(
          'rating-stars-row'
        ) as HTMLCollectionOf<HTMLDivElement>;

        this.adjustElementsMargins();
      })
    );
  }

  @HostListener('window:resize')
  adjustElementsMargins(): void {
    this.messagesRow.style.marginBottom = `calc(${this.ratingRows[0].clientHeight}px + 1rem)`;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.ratingRows.length; i++) {
      const ratingRow = this.ratingRows[i];
      ratingRow.style.top = `calc(${this.messagesRow.clientHeight}px + 0.5rem)`;
    }
  }

  close(type?: string): void {
    if (type === 'confirm') {
      if (this.ratingVal) this.matDialogRef.close(this.ratingVal);
      else this.showErrMsg = true;
    } else if (type === 'cancel') this.matDialogRef.close();
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptionsArr)
      subscription.unsubscribe();
  }
}
