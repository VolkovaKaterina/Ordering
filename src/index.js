import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reducers from './reducers';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const saveState = (state) => {
  if (state.order.length !== 0) {
    localStorage.setItem('state', JSON.stringify(state));
  }
};
const getState = () => {
  try {
    const s = localStorage.getItem('state');

    return s === null ? undefined : JSON.parse(s);
  } catch (e) {
    return undefined;
  }
};
const initialState = getState();

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState({
    order: store.getState().order,
  });
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
