import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string='';
  password : string = '';
  loginForm= new FormGroup
  ({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
  });


  constructor(private router: Router,private auth: AuthService) { }
  linkClick(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  ngOnInit(): void {}

  register(){
    this.auth.register(this.email,this.password);
    this.email ='';
    this.password = '';
  }
  

}
