import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { concat, delay } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const One = of(3, 2, 1);
    const Two = of(4, 5, 6);
    const example = Two.pipe(concat(One))
      .subscribe(value => {
        console.log('輸出: ', value);
      })

    const Three = One.pipe(delay(3000));
    const Example = Three.pipe(concat(Two))
      .subscribe(value => {
        console.log('輸出: ', value);
      })

    const sourceStr = of('This', 'Never', 'Runs')
    const source = sourceStr.pipe(concat(interval(1000), sourceStr))
      .subscribe(value => {
        // console.log('勢必照順序執行: ', value);
      })
  }

}
