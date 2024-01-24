// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2'
// import { UserServiceService } from '../user-service.service';


// @Component({
//   selector: 'app-user-upsert',
//   templateUrl: './user-upsert.component.html',
//   styleUrls: ['./user-upsert.component.css']
// })
// export class UserUpsertComponent implements OnInit{
  
//   constructor(public route:Router,public userService:UserServiceService){

//   }
 
//   ngOnInit() {
//     const selectedUser = this.userService.getSelectedUser();
//     if (selectedUser) {
//       this.loginForm.patchValue(selectedUser);
//     }
//    this.loginForm
//   }
//   showUserDetails = false;
//   submittedUserData: any;
//   loginForm=new FormGroup(
//     {
//       first_name:new FormControl("",Validators.required),
//       last_name:new FormControl("",Validators.required),
//       address:new FormControl("",Validators.required),
//       email:new FormControl("",[Validators.required,Validators.email]),
//       phone:new FormControl("",[Validators.required,Validators.pattern(/^\d{10}$/)])
//     }
//   )
  
//   users: any[] = [];
 
//   onSubmit() {
//     if (this.loginForm.valid) {
//       // const formData = this.loginForm.value;
//       const userData = this.loginForm.value;
//       this.userService.addUser(userData);
//       // this.userService.saveUser(userData);
//     this.userService.setSelectedUser(null);
//       this.route.navigate(['/user_list']);
//       // Check if email or phone already exists
//       const emailExists = this.users.some(user => user.email === userData.email);
//       const phoneExists = this.users.some(user => user.phone === userData.phone);
  
//       if (emailExists || phoneExists) {
//         Swal.fire({
//           title: 'Oops...',
//           text: 'Email or Phone already exists!',
//           icon: 'info',
          
//         });
//       } else {
//         // Add user to the array if not already exists
        
//         this.users.push(userData);
//         this.loginForm.reset();
//         Swal.fire({
//           title: 'User Added',
//           text: 'User has been added successfully!',
//           icon: 'success',
          
//         });
        
        
//       }
//     } else {
//       this.loginForm.markAllAsTouched();
//       Swal.fire({
//         title: 'Oops!...',
//         text: 'Please enter valid details',
//         icon: 'error',
        
//       });
//     }
//   }
  
//   // editUser(user: any) {
//   //   this.loginForm.patchValue(user);
//   // }
  
//   // deleteUser(index: any) {
//   //     this.users.splice(index, 1);
//   // }

  
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  
  constructor(public route: Router, public userService: UserServiceService) {}

  ngOnInit() {
    const selectedUser = this.userService.getSelectedUser();
    if (selectedUser) {
      this.loginForm.patchValue(selectedUser);
    }
  }

  loginForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^\d{10}$/)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      // Check if email or phone already exists using the userService
      const emailExists = this.userService.doesEmailExist(userData.email);
      const phoneExists = this.userService.doesPhoneExist(userData.phone);

      if (emailExists || phoneExists) {
        Swal.fire({
          title: 'Oops...',
          backdrop:"rgb(82 82 82)",
          text: 'Email or Phone Already Exists!',
          icon: 'info'
        });
      } else {
        // Add user to the userService
        this.userService.addUser(userData);
        // Clear selected user
        this.userService.setSelectedUser(null);
        // Navigate to the user list
        this.route.navigate(['/user_list']);

        Swal.fire({
          title: 'User Added',
          backdrop:"rgb(82 82 82)",
          text: 'User Added Successfully!',
          icon: 'success'
        });
      }
    } else {
      this.loginForm.markAllAsTouched();
      Swal.fire({
        title: 'Oops!...',      
        backdrop:"rgb(82 82 82)",
        text: 'Please Enter Valid Details',
        icon: 'error'
      });
    }
  }
}
