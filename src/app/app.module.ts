import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingPopupComponent } from './rating-popup/rating-popup.component';

@NgModule({
  declarations: [AppComponent, RatingPopupComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatDialogModule],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
