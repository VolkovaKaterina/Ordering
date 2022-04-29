import api from './api';

export const getProducts = () => api.get('/products');
export const getModifiers = () => api.get('/modifiers');
export const getBundles = () => api.get('/bundles');
export const postOrders = (data) => api.post('/orders', data);
export const createItem = (type, data) => api.post(`/${type}`, data);
export const getItem = (type, id) => api.get(`/${type}/${id}`);
export const editItem = (type, id, data) => api.put(`/${type}/${id}`, data);
