import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor() { }
  backTop() {
    // window.scrollY = 0;
  }
  ngOnInit() {
  }

}
