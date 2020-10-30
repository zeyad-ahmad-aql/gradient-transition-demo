import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatingPopupComponent } from './rating-popup/rating-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {}

  openRatingPopup(): void {
    this.matDialog.open(RatingPopupComponent, {
      hasBackdrop: true,
      disableClose: true,
      closeOnNavigation: false,
      data: {
        msg: ['Thank you for your time. Please provide your rating below'],
      },
    });
  }
}
