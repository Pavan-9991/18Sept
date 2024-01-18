import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkshadeComponent } from './darkshade.component';

describe('DarkshadeComponent', () => {
  let component: DarkshadeComponent;
  let fixture: ComponentFixture<DarkshadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkshadeComponent]
    });
    fixture = TestBed.createComponent(DarkshadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
