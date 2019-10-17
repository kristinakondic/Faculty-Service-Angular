import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { Professor } from "src/app/models/professor.model";
import { Observable } from "rxjs";
import { ProfessorPageable } from "src/app/models/professor-pageable.model";
import { ModalDirective } from "ngx-bootstrap";

@Component({
  selector: "app-professors-list",
  templateUrl: "./professors-list.component.html",
  styleUrls: ["./professors-list.component.scss"]
})
export class ProfessorsListComponent implements OnInit {
  professors$: Observable<Professor[]>;
  professor$: Observable<Professor>;
  professorsPageable$: Observable<ProfessorPageable>;
  newProfessor = new Professor();
  professorExists = null;
  selectedProfessorIdToDelete = null;
  errorMsg = "";

  constructor(private store: Store<fromStore.AppState>) {}

  @ViewChild("selectType") selectType = {
    nativeElement: { value: null }
  };
  @ViewChild("closeModalBtn") public closeModalBtn: ModalDirective;
  @ViewChild("openModalBtn") public openModalBtn: ModalDirective;
  @ViewChild("closeDeleteModalBtn") public closeDeleteModalBtn: ModalDirective;

  ngOnInit() {
    this.professors$ = this.store.select(fromStore.getProfessors);

    this.professorsPageable$ = this.store.select(
      fromStore.getProfessorsPageable
    );
    this.getProfessorsPage(0, 6);
  }

  getProfessorsPage(page: number, size: number) {
    this.store.dispatch(new fromStore.LoadProfessors({ page, size }));
  }

  pageChanged(event: any): void {
    this.getProfessorsPage(event.page - 1, event.itemsPerPage);
  }

  addProfessor() {
    this.newProfessor.type = this.selectType.nativeElement.value.toLowerCase();
    if (
      !this.newProfessor.userDTO.name ||
      this.newProfessor.userDTO.identityNo ||
      this.newProfessor.userDTO.email ||
      this.newProfessor.userDTO.address ||
      this.newProfessor.userDTO.surname == null
    ) {
      this.professorExists
        ? this.store.dispatch(new fromStore.EditProfessor(this.newProfessor))
        : this.store.dispatch(new fromStore.AddProfessor(this.newProfessor));
      this.closeModalBtn["nativeElement"].click();
      this.newProfessor = new Professor();
    } else {
      this.errorMsg = "Morate popuniti sva polja.";
    }
  }

  setProfessorExists(status) {
    this.professorExists = status;
    this.newProfessor = new Professor();
  }

  editProfessor(id) {
    this.openModalBtn["nativeElement"].click();
    this.professor$ = this.store.select(fromStore.getProfessor, id);
    this.professor$.subscribe(p => {
      this.newProfessor = p;
    });
    this.professorExists = true;
  }

  getSelectedProfessor(id) {
    this.selectedProfessorIdToDelete = id;
  }

  deleteProfessor() {
    this.store.dispatch(
      new fromStore.DeleteProfessor(this.selectedProfessorIdToDelete)
    );
    this.closeDeleteModalBtn["nativeElement"].click();
  }
}
