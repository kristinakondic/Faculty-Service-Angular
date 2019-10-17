import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUnpassedSubjectListComponent } from './student-unpassed-subject-list.component';

describe('StudentUnpassedSubjectListComponent', () => {
  let component: StudentUnpassedSubjectListComponent;
  let fixture: ComponentFixture<StudentUnpassedSubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUnpassedSubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUnpassedSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
