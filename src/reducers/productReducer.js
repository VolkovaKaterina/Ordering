import { CREATE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCT } from '../actions/actionTypes';

const initialState = [];
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT:
      return payload;
    case CREATE_PRODUCT:
      return [...state, payload];

    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        }
        return product;
      });

    default:
      return state;
  }
};

export default productReducer;
