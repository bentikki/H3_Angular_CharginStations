import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerDetailsComponent } from './charger-details.component';

describe('ChargerDetailsComponent', () => {
  let component: ChargerDetailsComponent;
  let fixture: ComponentFixture<ChargerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
