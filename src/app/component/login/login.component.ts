import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  lesUsers !: User[];
  hide: boolean = true;
  constructor( private userservice:UserService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    if (this.userservice.user) this.router.navigate(['home'])
    
    this.loginForm = this.fb.nonNullable.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[a-zA-Z.]{2,15}$')]],
      password : ['',[Validators.required,]],
      role:['']
    })
    
    this.userservice.getUsers().subscribe(
      (value) =>{ 
        this.lesUsers = value['users'];})
  }

  public get emaillogin(){
    return this.loginForm.get('email');
  }
  public get passwordlogin(){
    return this.loginForm.get('password');
  }

  loginUsers(){
    const { email, password } = this.loginForm.value;
    const [user] = this.lesUsers.filter((user) => user.login === email && user.pwd === password) // returns array of filtered users
    if (user) {
      this.userservice.user = user; // better not store all user because password can be stolen.
      if (user.role === "admin") {
        this.router.navigate(['admin'])
      } else {
        this.router.navigate(['home'])
      }
    }
    
    this.loginForm.reset();
  }


}
