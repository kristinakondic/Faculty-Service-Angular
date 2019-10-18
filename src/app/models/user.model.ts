import { Student } from "./student.model";

export class User {
  id: any;
  name: string;
  surname: string;
  address: string;
  identityNo: string;
  email: string;
  role: string;
  student?: any;

  constructor() {
    this.id = null;
    this.name = null;
    this.surname = null;
    this.email = null;
    this.identityNo = null;
    this.address = null;
  }
}
