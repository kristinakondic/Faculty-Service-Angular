import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPassedSubjectListComponent } from './student-passed-subject-list.component';

describe('StudentPassedSubjectListComponent', () => {
  let component: StudentPassedSubjectListComponent;
  let fixture: ComponentFixture<StudentPassedSubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPassedSubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPassedSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
