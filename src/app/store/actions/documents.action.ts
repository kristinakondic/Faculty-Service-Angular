// import { Action } from "@ngrx/store";

// import { Document } from "src/app/models/document.model";

// // load payments
// export const LOAD_DOCUMENTS = "[Documents] Load Documents";
// export const LOAD_DOCUMENTS_FAIL = "[Documents] Load Documents Fail";
// export const LOAD_DOCUMENTS_SUCCESS = "[Documents] Load Documents Success";

// export class LoadDocuments implements Action {
//   readonly type = LOAD_DOCUMENTS;
//   constructor(public payload: any) {}
// }

// export class LoadDocumentsFail implements Action {
//   readonly type = LOAD_DOCUMENTS_FAIL;
//   constructor(public payload: any) {}
// }

// export class LoadDocumentsSuccess implements Action {
//   readonly type = LOAD_DOCUMENTS_SUCCESS;
//   constructor(public payload: Document[]) {}
// }

// // add payment
// export const ADD_DOCUMENTS = "[Document] Add Document";
// export const ADD_DOCUMENTS_FAIL = "[Document] Add Document Fail";
// export const ADD_DOCUMENTS_SUCCESS = "[Document] Add Document Success";

// export class AddDocument implements Action {
//   readonly type = ADD_DOCUMENTS;
//   constructor(public payload: any) {}
// }

// export class AddDocumentFail implements Action {
//   readonly type = ADD_DOCUMENTS_FAIL;
//   constructor(public payload: any) {}
// }

// export class AddDocumentSuccess implements Action {
//   readonly type = ADD_DOCUMENTS_SUCCESS;
//   constructor(public payload: Document) {}
// }

// // action types
// export type DocumentsActions =
//   | LoadDocuments
//   | LoadDocumentsFail
//   | LoadDocumentsSuccess
//   | AddDocument
//   | AddDocumentFail
//   | AddDocumentSuccess;
