import { ADD_ITEMS } from '../action_types';

const initialState = { items: {} };

export default function data(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS: {
      return {
        ...state,
        items: { ...state.items, ...action.payload }
      };
    }

    default: {
      return state;
    }
  }
}
