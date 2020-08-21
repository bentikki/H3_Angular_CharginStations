import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargerFinderComponent } from './carger-finder.component';

describe('CargerFinderComponent', () => {
  let component: CargerFinderComponent;
  let fixture: ComponentFixture<CargerFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargerFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargerFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
