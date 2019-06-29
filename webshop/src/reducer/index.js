import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER,
} from '../constants';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
