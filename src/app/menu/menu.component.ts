import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggle = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

}
