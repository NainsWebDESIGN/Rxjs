import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  data: any = [
    { name: "map", href: "map" },
    { name: "filter", href: "filter" },
    { name: "take", href: "take" },
    { name: "first", href: "first" },
    { name: "takeuntil", href: "takeuntil" },
    { name: "concatAll", href: "concatAll" }

  ]
  constructor() { }
  ScrollToElement($element: any) {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  ngOnInit() {
  }

}
