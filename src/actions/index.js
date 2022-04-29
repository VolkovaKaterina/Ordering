import {
  getProducts, getModifiers, getBundles, postOrders, createItem, editItem,
} from '../api/apiRequests';
import {
  FETCH_BUNDLES,
  FETCH_PRODUCT,
  FETCH_MODIFIERS,
  CREATE_ORDER,
  ADD_MODIFIERS,
  SELECTED_PRODUCT,
  DELETE_PRODUCT,
  DELETE_MODIFIERS,
  DELETE_ORDER,
  PAY_ORDER,
  CREATE_PRODUCT,
  CREATE_MODIFIER, EDIT_PRODUCT, EDIT_MODIFIER,

} from './actionTypes';

export const fetchProducts = () => async (dispatch) => {
  const response = await getProducts();

  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const fetchModifiers = () => async (dispatch) => {
  const response = await getModifiers();

  dispatch({ type: FETCH_MODIFIERS, payload: response.data });
};

export const fetchBundles = () => async (dispatch) => {
  const response = await getBundles();

  dispatch({ type: FETCH_BUNDLES, payload: response.data });
};
export const createProduct = (type, data) => async (dispatch) => {
  const response = await createItem(type, data);
  dispatch({ type: CREATE_PRODUCT, payload: response.data });
};

export const editProduct = (type, id, data) => async (dispatch) => {
  const response = await editItem(type, id, data);
  dispatch({ type: EDIT_PRODUCT, payload: response.data });
};

export const createModifier = (type, data) => async (dispatch) => {
  const response = await createItem(type, data);
  dispatch({ type: CREATE_MODIFIER, payload: response.data });
};

export const editModifier = (type, id, data) => async (dispatch) => {
  const response = await editItem(type, id, data);
  dispatch({ type: EDIT_MODIFIER, payload: response.data });
};

export const createOrder = (data) => ({ type: CREATE_ORDER, payload: data });

export const addModifiers = (data) => ({ type: ADD_MODIFIERS, payload: data });

export const selectedProduct = (data) => ({ type: SELECTED_PRODUCT, payload: data });

export const deleteProduct = (data) => ({ type: DELETE_PRODUCT, payload: data });

export const deleteModifiers = (data) => ({ type: DELETE_MODIFIERS, payload: data });

export const deleteOrder = () => ({ type: DELETE_ORDER });

export const payOrder = (data) => async (dispatch) => {
  const response = await postOrders(data);
  dispatch({ type: PAY_ORDER, payload: response.data });
};
