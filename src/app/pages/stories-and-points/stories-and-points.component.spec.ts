import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAndPointsComponent } from './stories-and-points.component';

describe('StoriesAndPointsComponent', () => {
  let component: StoriesAndPointsComponent;
  let fixture: ComponentFixture<StoriesAndPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoriesAndPointsComponent]
    });
    fixture = TestBed.createComponent(StoriesAndPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
