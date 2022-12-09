import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeSlider={items: 2, dots: true, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
