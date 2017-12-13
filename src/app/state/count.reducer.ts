import { Action } from '@ngrx/store';

import { CountState } from './count';

export const initialState = {
  count: 0
};

export const CountActions = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset'
};

export function countReducer(
  state: CountState = initialState,
  action: Action
): CountState {
  switch (action.type) {
  case CountActions.increment:
    return { count: state.count + 1 };
  case CountActions.decrement:
    return { count: state.count - 1 };
  case CountActions.reset:
    return { count: initialState.count };
  default:
    return state;
  }
}
