import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import {
  Outlet, Route, Routes, useNavigate,
} from 'react-router-dom';
import ProductsItem from './ProductsItem';

function OrderMenu() {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" spacing={2} m={2}>
        <Button onClick={() => navigate('/products/burgers')} variant="contained">Products</Button>
        <Button variant="contained">Modifiers</Button>
      </Stack>
      <Outlet />
      <Routes>
        <Route path="burgers" element={<ProductsItem />} />
        <Route path="modifiers" element={<ProductsItem />} />
      </Routes>
    </Box>
  );
}
export default OrderMenu;
