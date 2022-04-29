import { combineReducers } from 'redux';
import productReducer from './productReducer';
import modifiersReducer from './modifiersReducer';
import bundlesReducer from './bundlesReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  products: productReducer,
  modifiers: modifiersReducer,
  bundles: bundlesReducer,
  order: orderReducer,
});
