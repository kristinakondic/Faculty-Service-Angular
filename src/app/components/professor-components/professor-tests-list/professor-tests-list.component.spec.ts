import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorTestsListComponent } from './professor-tests-list.component';

describe('ProfessorTestsListComponent', () => {
  let component: ProfessorTestsListComponent;
  let fixture: ComponentFixture<ProfessorTestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorTestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorTestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
