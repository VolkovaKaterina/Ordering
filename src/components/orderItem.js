import React from 'react';
import {
  Box, Button,
  IconButton, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { deleteModifiers, deleteProduct, selectedProduct } from '../actions';

function OrderItem({
  item, name, price, type, setBurgerOrder,
}) {
  const dispatch = useDispatch();

  const deleteFromOrder = (value) => (value === 'modifiers' ? dispatch(deleteModifiers(item)) : dispatch(deleteProduct(item)));

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: 1,
      }}
      >
        <Typography p={2} sx={{ wordWrap: 'break-word', width: '60%' }}>
          {name}
        </Typography>
        <Typography>
          {price}
          {' '}
          $
        </Typography>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => deleteFromOrder(type)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box>
        {item.type === 'products' ? (
          <Button
            sx={{
              padding: 3,
            }}
            startIcon={<AddShoppingCartIcon />}
            size="small"
            onClick={() => {
              setBurgerOrder(false);
              dispatch(selectedProduct(item));
            }}
          >
            Add modifiers
          </Button>
        ) : ''}
      </Box>
    </Box>
  );
}

export default OrderItem;
