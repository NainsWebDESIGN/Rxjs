import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { AppService } from '@service/app.service';
import { Subscription } from 'rxjs/Subscription';


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