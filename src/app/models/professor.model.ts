import { User } from "./user.model";

export class Professor {
  id: any;
  type: any;
  userDTO: User;

  constructor() {
    this.id = null;
    this.type = null;
    this.userDTO = new User();
  }
}
