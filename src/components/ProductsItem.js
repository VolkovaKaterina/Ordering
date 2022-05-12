import React from 'react';
import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';
import { addModifiers, createOrder } from '../actions';

const ProductsItem = ({ item, type, setNoOrder }) => {
  const dispatch = useDispatch();
  const key = uniqid();
  const keyModifiers = uniqid();
  const navigate = useNavigate();

  const addToOrder = () => {
    if (type === 'products') {
      dispatch(createOrder({ ...item, key }));
      setNoOrder(false);
    } else if (type === 'modifiers') {
      dispatch(addModifiers({ ...item, keyModifiers }));
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.picture}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h6">
            {item.name}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {item.price}
            {' '}
            $
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={addToOrder}
          >
            Order
          </Button>
          <Button
            size="small"
            onClick={() => navigate(`/${type}:${item.id}`)}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductsItem;
