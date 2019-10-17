import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentsListComponent } from './student-payments-list.component';

describe('StudentPaymentsListComponent', () => {
  let component: StudentPaymentsListComponent;
  let fixture: ComponentFixture<StudentPaymentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPaymentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
