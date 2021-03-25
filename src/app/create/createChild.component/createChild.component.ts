import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { AppService } from '@service/app.service';


@Component({
  selector: 'of',
  templateUrl: './of.html',
  styleUrls: ['./createChild.component.css']
})
export class OfComponent implements OnInit {
  source: Observable<string> = of('Nains', 'Todd', 'Jacky');
  constructor(private app: AppService) { }
  ngOnInit() {
    this.source.subscribe(this.app.Observer);
  }

}

@Component({
  selector: 'from',
  templateUrl: './from.html',
  styleUrls: ['./createChild.component.css']
})
export class FromComponent implements OnInit {
  source: Observable<any> = from(['Nains', 'Todd', 'Jacky']);
  sourceStr: Observable<string> = from('Nains');
  constructor(private app: AppService) { }
  ngOnInit() {
    this.source.subscribe(this.app.Observer);
    this.sourceStr.subscribe(this.app.Observer);
  }

}

@Component({
  selector: 'fromEvent',
  templateUrl: './fromEvent.html',
  styleUrls: ['./createChild.component.css']
})
export class FromEventComponent implements OnInit {
  source: Observable<any> = fromEvent(document.body, 'click');
  constructor(private app: AppService) { }
  ngOnInit() {
    this.source.subscribe(this.app.Observer);
  }

}