import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizbytestComponent } from './view-quizbytest.component';

describe('ViewQuizbytestComponent', () => {
  let component: ViewQuizbytestComponent;
  let fixture: ComponentFixture<ViewQuizbytestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuizbytestComponent]
    });
    fixture = TestBed.createComponent(ViewQuizbytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
