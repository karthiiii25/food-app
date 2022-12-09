import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  loginForm= new FormGroup
  ({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
