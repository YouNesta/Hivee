export class User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthdate: Date;
  sexe: string;
  description: string;
  city: string;

  constructor( email: string,
               firstName: string,
               lastName: string,
               phone: string,
               birthdate: Date,
               sexe: string,
               description: string,
               city: string,
               id?: string){

    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birthdate = birthdate ;
    this.sexe = sexe ;
    this.description = description ;
    this.city = city ;
    this.id = id;
  }
}
