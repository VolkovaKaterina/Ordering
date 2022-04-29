import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { fetchBundles, fetchModifiers, fetchProducts } from '../actions';
import Layout from './Layout';
import Order from './Order';
import Create from './Create';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchModifiers());
    dispatch(fetchBundles());
  }, []);
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Order />} />
          <Route path="product" element={<Create type="products" />} />
          <Route path="modifier" element={<Create type="modifiers" />} />
          <Route path="bundler" element={<Create type="bundler" />} />
          <Route path="/product:id" element={<Create type="products" />} />
          <Route path="/modifier:id" element={<Create type="modifiers" />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
