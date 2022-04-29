import { CREATE_MODIFIER, EDIT_MODIFIER, FETCH_MODIFIERS } from '../actions/actionTypes';

const modifiersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MODIFIERS:
      return payload;
    case CREATE_MODIFIER:
      return [...state, payload];
    case EDIT_MODIFIER:
      return state.map((modifier) => {
        if (modifier.id === payload.id) {
          return {
            ...modifier,
            ...payload,
          };
        }
        return modifier;
      });
    default:
      return state;
  }
};

export default modifiersReducer;
