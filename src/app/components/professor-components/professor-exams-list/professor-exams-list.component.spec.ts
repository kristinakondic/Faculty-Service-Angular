import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorExamsListComponent } from './professor-exams-list.component';

describe('ProfessorExamsListComponent', () => {
  let component: ProfessorExamsListComponent;
  let fixture: ComponentFixture<ProfessorExamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorExamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
