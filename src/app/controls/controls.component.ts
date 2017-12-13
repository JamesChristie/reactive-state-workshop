import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CountState } from '../state/count';
import { CountActions } from '../state/count.reducer';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  constructor(private countStore: Store<CountState>) { }

  ngOnInit() {
  }

  reset() {
    this.countStore.dispatch({ type: CountActions.reset });
  }
}
