import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPopupComponent } from './rating-popup.component';

describe('RatingPopupComponent', () => {
  let component: RatingPopupComponent;
  let fixture: ComponentFixture<RatingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
