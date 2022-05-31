import {
  CREATE_ORDER, ADD_MODIFIERS,
  SELECTED_PRODUCT, DELETE_MODIFIERS, DELETE_PRODUCT, DELETE_ORDER, PAY_ORDER,
} from '../actions/actionTypes';

const initialState = {
  order: [],
  selected: [],

};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: [...state.order, payload],
      };

    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: payload,
      };

    case ADD_MODIFIERS: {
      const { order } = state;
      const { selected } = state;
      const newOrder = order.map((item) => {
        if (item.key === selected.key) {
          if (!item.modifiers) {
            // eslint-disable-next-line no-param-reassign
            item.modifiers = [];
          }
          return { ...item, modifiers: [...item.modifiers, payload] };
        }
        return item;
      });
      return {
        ...state,
        order: newOrder,
      };
    }
    case DELETE_PRODUCT: {
      const { order } = state;
      const filterOrder = order.filter((item) => item.key !== payload.key);
      return {
        ...state,
        order: filterOrder,
        selected: [],
        orders: [],
      };
    }
    case DELETE_MODIFIERS: {
      const { order } = state;
      const filterOrder = order
        .map((item) => {
          if (item.modifiers) {
            const modifier = item.modifiers
              .filter((value) => value.keyModifiers !== payload.keyModifiers);
            return {
              ...item, modifiers: modifier,
            };
          } return item;
        });
      return {
        ...state,
        order: filterOrder,

      };
    }
    case DELETE_ORDER:
      return {
        ...state,
        order: [],
        selected: [],
      };
    case PAY_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    default:
      return state;
  }
};
export default orderReducer;
