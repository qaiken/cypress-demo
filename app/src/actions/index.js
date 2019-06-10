import { ADD_ITEMS } from '../action_types';
import apiService from '../services/api-service';

export function addItems(items) {
  return { type: ADD_ITEMS, payload: items };
}

export function fetchItems() {
  return dispatch => {
    return apiService
      .request(`${process.env.REACT_APP_API_URL}/items`)
      .then(res => res.data)
      .then((items = []) => {
        const normalizedItems = items.reduce((allItems, item) => {
          return {
            ...allItems,
            [item.id]: item
          };
        }, {});

        dispatch(addItems(normalizedItems));
      });
  };
}
