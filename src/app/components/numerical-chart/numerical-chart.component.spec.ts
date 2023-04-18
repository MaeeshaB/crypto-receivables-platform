import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalChartComponent } from './numerical-chart.component';

describe('NumericalChartComponent', () => {
  let component: NumericalChartComponent;
  let fixture: ComponentFixture<NumericalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
