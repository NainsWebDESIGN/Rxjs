import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  data: any = [
    { name: "map", href: "map" },
    { name: "filter", href: "filter" }

  ]
  constructor() { }

  ngOnInit() {
  }

}
