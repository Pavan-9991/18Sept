import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmchartsmapComponent } from './amchartsmap.component';

describe('AmchartsmapComponent', () => {
  let component: AmchartsmapComponent;
  let fixture: ComponentFixture<AmchartsmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmchartsmapComponent]
    });
    fixture = TestBed.createComponent(AmchartsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
