import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppService } from '@service/app.service';

@Component({
  selector: 'of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  source: Observable<string> = of('Nains', 'Todd', 'Jacky');
  constructor(private app: AppService) { }
  ngOnInit() {
    this.source.subscribe(this.app.Observer);
  }

}
