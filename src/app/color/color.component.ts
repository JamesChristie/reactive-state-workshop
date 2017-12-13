import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CountState } from '../state/count';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  countState$: Observable<number>;

  constructor(private countStore: Store<CountState>) {
    this.countState$ = this.countStore.select(state => state.count);
  }

  ngOnInit() { }

  isZero(count: number) {
    return count === 0;
  }

  isOdd(count: number) {
    const absoluteCount = Math.abs(count);
    return !this.isPrime(count) && absoluteCount % 2 === 1;
  }

  isEven(count: number) {
    return !this.isZero(count) && !this.isPrime(count) && count % 2 === 0;
  }

  isPrime(count: number) {
    if (this.isZero(count) || count < 0) {
      return false;
    }

    for (let i = 2, s = Math.sqrt(count); i <= s; i++) {
      if (count % i === 0) {
        return false;
      }
    }

    return count !== 1;
  }
}
