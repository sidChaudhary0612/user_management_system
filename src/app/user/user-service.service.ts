import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  private users: any[] = [];
selectedUser:any
  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
  setSelectedUser(user: any) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser;
  }
  // doesEmailExist(email: any): boolean {
  //   return this.users.some(user => user.email === email);
  // }
  doesPhoneExist(phone: any): boolean {
    return this.users.some(user => user.phone === phone);
  }
}
