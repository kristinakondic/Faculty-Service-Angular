import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSubjectsListComponent } from './professor-subjects-list.component';

describe('ProfessorSubjectsListComponent', () => {
  let component: ProfessorSubjectsListComponent;
  let fixture: ComponentFixture<ProfessorSubjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorSubjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
