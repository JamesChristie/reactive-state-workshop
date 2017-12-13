import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CountState } from '../state/count';
import { CountActions } from '../state/count.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  countState$: Observable<number>;

  constructor(private countStore: Store<CountState>) {
    this.countState$ = this.countStore.select(state => state.count);
  }

  ngOnInit() {
  }

  increment() {
    this.countStore.dispatch({ type: CountActions.increment });
  }

  decrement() {
    this.countStore.dispatch({ type: CountActions.decrement });
  }
}
