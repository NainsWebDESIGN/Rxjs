import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { AppService } from '@service/app.service';

@Component({
  selector: 'from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
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
