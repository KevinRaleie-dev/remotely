import { Injectable } from '@angular/core';
import { User } from '../../utils/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [];
  constructor() { }

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): Array<User> {
    return this.users;
  }

  deleteAllUsers() {
    this.users = [];
    return this.users;
  }
}
