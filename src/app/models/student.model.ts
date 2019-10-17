import { User } from "./user.model";

export class Student {
  id: any;
  indexNo: any;
  yearOfStudy: any;
  userDTO: User;

  constructor() {
    this.id = null;
    this.indexNo = null;
    this.yearOfStudy = null;
    this.userDTO = new User();
  }
}
