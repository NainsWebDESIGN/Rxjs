import { Component, OnInit, OnDestroy } from '@angular/core';

import { map } from 'rxjs/operators/map';
import { mapTo } from 'rxjs/operators/mapTo';
import { filter } from 'rxjs/operators/filter';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'map',
  templateUrl: './map.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class Map implements OnInit {
  // source: any = interval(1000);
  constructor() { }
  ngOnInit() {
    // let newest = this.source.pipe(map((el: number) => el + 2))
    // this.clearSource = newest.subscribe(el => { console.log(el); });
    // let newest = this.source.pipe(mapTo(2));
    // newest.subscribe(el => { console.log(el); })
  }

}

@Component({
  selector: 'filter',
  templateUrl: './filter.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class Filter implements OnInit {
  // source: any = interval(1000);
  constructor() { }
  ngOnInit() {
    // let newest = this.source.pipe(filter((el: number) => el % 2 === 0));
    // newest.subscribe(el => console.log(el))
  }

}
