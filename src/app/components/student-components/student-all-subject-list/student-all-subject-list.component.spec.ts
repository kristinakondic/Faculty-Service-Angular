import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllSubjectListComponent } from './student-all-subject-list.component';

describe('StudentAllSubjectListComponent', () => {
  let component: StudentAllSubjectListComponent;
  let fixture: ComponentFixture<StudentAllSubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAllSubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAllSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
