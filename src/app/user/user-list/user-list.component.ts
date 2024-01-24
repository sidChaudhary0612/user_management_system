import { Component, OnInit } from '@angular/core';
import { UserUpsertComponent } from '../user-upsert/user-upsert.component';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: any[] = [];

  constructor(public route:Router, private userService: UserServiceService,public userUpsert:UserUpsertComponent) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  editUser(user: any) {
    this.userService.setSelectedUser(user);
    this.route.navigate(['/'])
   
  }
  
  deleteUser(index: any) {
      this.users.splice(index, 1);
  }
}
