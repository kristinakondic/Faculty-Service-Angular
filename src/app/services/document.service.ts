import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DocumentService {
  private baseUrl = "/api/document";

  constructor(private http: HttpClient) {}

  getDocumentsByStudentId(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/student/" + id);
  }

  downloadFile(data): Observable<any> {
    const REQUEST_PARAMS = new HttpParams().set("fileName", data.fileName);
    const REQUEST_URL = this.baseUrl + "/download/" + data;
    return this.http.get(REQUEST_URL, {
      params: REQUEST_PARAMS,
      responseType: "arraybuffer"
    });
  }
}
