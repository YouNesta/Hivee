export class User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;

  constructor( email: string, firstName: string, lastName: string, phone: string, id?: string){
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.id = id;
  }
}
