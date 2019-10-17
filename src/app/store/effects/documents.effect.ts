// import { Injectable } from "@angular/core";

// import { Effect, Actions, ofType } from "@ngrx/effects";
// import { of } from "rxjs";
// import { map, switchMap, catchError, pluck } from "rxjs/operators";

// import * as documentActions from "../actions/documents.action";
// import * as fromServices from "../../services";

// @Injectable()
// export class DocumentsEffects {
//   constructor(
//     private actions$: Actions,
//     private documentService: fromServices.DocumentService
//   ) {}
//   //load documents
//   @Effect()
//   loadDocuments$ = this.actions$.pipe(
//     ofType(documentActions.LOAD_DOCUMENTS),
//     pluck("payload"),
//     switchMap(payload => {
//       return this.documentService.getDocumentsByStudentId(payload["id"]).pipe(
//         map(payments => new documentActions.LoadDocumentsSuccess(payments)),
//         catchError(error => of(new documentActions.LoadDocumentsFail(error)))
//       );
//     })
//   );
// }
