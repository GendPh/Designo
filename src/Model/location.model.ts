export class Location {
  city: string;
  street: string;
  address: string;
  phone: string;
  email: string;
  coordinates: number[];

  constructor(city: string, street: string, address: string, phone: string, email: string, coordinates: number[]) {
    this.city = city;
    this.street = street;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.coordinates = coordinates;
  }
}