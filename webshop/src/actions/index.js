import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER
} from '../constants';

export function incrementCounter() {
  return { type: INCREMENT_COUNTER }
}

export function decrementCounter() {
  return { type: DECREMENT_COUNTER }
}

export function setCounter(value) {
  return { type: SET_COUNTER, payload: value }
}
