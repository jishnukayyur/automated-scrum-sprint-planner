import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCalculatorFormComponent } from './sprint-calculator-form.component';

describe('SprintCalculatorFormComponent', () => {
  let component: SprintCalculatorFormComponent;
  let fixture: ComponentFixture<SprintCalculatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SprintCalculatorFormComponent]
    });
    fixture = TestBed.createComponent(SprintCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
