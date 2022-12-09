import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

}
