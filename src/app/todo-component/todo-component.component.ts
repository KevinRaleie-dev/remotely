import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/utils/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService) { }

  users: Array<User> = this.userService.getUsers();



  handleSubmit(): void {
    this.userService.addUser(this.registerForm.value);
    window.alert('added user');
  }

  removeUsers() {
    this.userService.deleteAllUsers();
    console.log('deleting');
    this.userService.getUsers();
  }


  ngOnInit(): void {
  }

}
