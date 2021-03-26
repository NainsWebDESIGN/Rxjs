import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { empty } from 'rxjs/observable/empty';
import { never } from 'rxjs/observable/never';
import { _throw } from 'rxjs/observable/throw';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { AppService } from '@service/app.service';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';


@Component({
  selector: 'of',
  templateUrl: './of.html',
  styleUrls: ['./createChild.component.css']
})
export class OfComponent implements OnInit, OnDestroy {
  source: Observable<string> = of('Nains', 'Todd', 'Jacky');
  clearSource: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    this.clearSource = this.source.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    this.clearSource.unsubscribe();
  }

}

@Component({
  selector: 'from',
  templateUrl: './from.html',
  styleUrls: ['./createChild.component.css']
})
export class FromComponent implements OnInit, OnDestroy {
  source: Observable<any> = from(['Nains', 'Todd', 'Jacky']);
  sourceStr: Observable<string> = from('Nains');
  clearSource: Subscription = new Subscription();
  clearSourceStr: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    this.clearSource = this.source.subscribe(this.app.Observer);
    this.clearSourceStr = this.sourceStr.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    this.clearSource.unsubscribe();
    this.clearSourceStr.unsubscribe();
  }

}

@Component({
  selector: 'frompromise',
  templateUrl: './frompromise.html',
  styleUrls: ['./createChild.component.css']
})
export class Frompromise implements OnInit, OnDestroy {
  source: Observable<any> = fromPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello RxJS!');
    }, 3000)
  }))
  clearSource: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    this.clearSource = this.source.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    this.clearSource.unsubscribe();
  }

}

@Component({
  selector: 'fromEvent',
  templateUrl: './fromEvent.html',
  styleUrls: ['./createChild.component.css']
})
export class FromEventComponent implements OnInit, OnDestroy {
  source: Observable<any> = fromEvent(document.body, 'click');
  clearSource: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    this.clearSource = this.source.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    this.clearSource.unsubscribe();
  }

}

@Component({
  selector: 'boring',
  templateUrl: './boring.html',
  styleUrls: ['./createChild.component.css']
})
export class Boring implements OnInit, OnDestroy {
  Empty: Observable<any> = empty();
  Never: Observable<any> = never();
  Throw: Observable<any> = _throw('哪尼!');
  clearEmpty: Subscription = new Subscription();
  clearNever: Subscription = new Subscription();
  clearThrow: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    let Observer = {
      next: value => { console.log(value); },
      complete: () => { console.log('完成!'); },
      error: error => { console.log('錯誤: ' + error); }
    }
    this.clearEmpty = this.Empty.subscribe(this.app.Observer);
    this.clearNever = this.Never.subscribe(this.app.Observer);
    this.clearThrow = this.Throw.subscribe(Observer);
  }
  ngOnDestroy() {
    this.clearEmpty.unsubscribe();
    this.clearNever.unsubscribe();
    this.clearThrow.unsubscribe();
  }

}

@Component({
  selector: 'timer',
  templateUrl: './timer.html',
  styleUrls: ['./createChild.component.css']
})
export class Timer implements OnInit, OnDestroy {
  Interval_Js: Observable<any> = Observable.create(ob => {
    let i = 0;
    setInterval(() => {
      ob.next(i++);
    }, 1000)
  })
  Interval: Observable<any> = interval(1000);
  Timer: Observable<any> = timer(1000, 5000);
  clearInterval: Subscription = new Subscription();
  clearTimer: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    // this.clearInterval = this.Interval.subscribe(this.app.Observer);
    // this.clearTimer = this.Timer.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    // this.clearInterval.unsubscribe();
    // this.clearTimer.unsubscribe();
  }

}

@Component({
  selector: 'subscription',
  templateUrl: './subscription.html',
  styleUrls: ['./createChild.component.css']
})
export class SubscriptionComponent implements OnInit, OnDestroy {
  source: Observable<any> = fromEvent(document.body, 'click');
  clearSource: Subscription = new Subscription();
  constructor(private app: AppService) { }
  ngOnInit() {
    this.clearSource = this.source.subscribe(this.app.Observer);
  }
  ngOnDestroy() {
    this.clearSource.unsubscribe();
  }

}