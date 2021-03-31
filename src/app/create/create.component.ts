import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data: any = [
    { name: "of", href: "of" },
    { name: "from", href: "from" },
    { name: "fromPromise", href: "fromPromise" },
    { name: "fromEvent", href: "fromEvent" },
    { name: "never", href: "never" },
    { name: "empty", href: "never" },
    { name: "throw", href: "never" },
    { name: "interval", href: "interval" },
    { name: "timer", href: "interval" },
    { name: "Subscription", href: "Subscription" }
  ]
  constructor() { }
  backTop() {
  }
  ngOnInit() {
  }

}
