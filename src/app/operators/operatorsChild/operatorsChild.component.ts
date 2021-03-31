import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '@service/app.service';

import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { take, map, mapTo, filter, first, takeUntil, concatAll } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs';

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

@Component({
  selector: 'take',
  templateUrl: './take.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class Take implements OnInit {
  // source: any = interval(1000);
  constructor(private app: AppService) { }
  ngOnInit() {
    // let newest = this.source.pipe(take(3));
    // newest.subscribe(this.app.Observer);
  }

}

@Component({
  selector: 'first',
  templateUrl: './first.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class First implements OnInit {
  // source: any = interval(1000);
  constructor(private app: AppService) { }
  ngOnInit() {
    // let newest = this.source.pipe(first());
    // newest.subscribe(this.app.Observer);
  }

}

@Component({
  selector: 'takeuntil',
  templateUrl: './takeuntil.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class TakeUntil implements OnInit {
  // source: any = interval(1000);
  // click: any = fromEvent(document.body, 'click');
  constructor(private app: AppService) { }
  ngOnInit() {
    // let newest = this.source.pipe(takeUntil(this.click));
    // newest.subscribe(this.app.Observer);
  }

}

@Component({
  selector: 'concatAll',
  templateUrl: './concatAll.html',
  styleUrls: ['./operatorsChild.component.css']
})
export class ConcatAll implements OnInit {
  // click: any = fromEvent(document.body, 'click');
  // source: Observable<any> = this.click.pipe(map(() => of(1, 2, 3)));
  constructor(private app: AppService) { }
  ngOnInit() {
    // let newest = this.source.pipe(concatAll());
    // newest.subscribe(this.app.Observer);
  }

}