import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerSearchComponent } from './charger-search.component';

describe('ChargerSearchComponent', () => {
  let component: ChargerSearchComponent;
  let fixture: ComponentFixture<ChargerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
