import { FETCH_BUNDLES } from '../actions/actionTypes';

// eslint-disable-next-line default-param-last
const bundlesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BUNDLES:
      return action.payload;
    default:
      return state;
  }
};

export default bundlesReducer;
