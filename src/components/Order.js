import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container, Grid, Modal, Paper, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './orderItem';
import ProductsList from './ProductsList';
import { deleteOrder, payOrder } from '../actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Order() {
  const getOrderSum = (order) => {
    let sum = 0;
    order.forEach((item) => {
      sum += item.price;
      if (item.modifiers) {
        sum += getOrderSum(item.modifiers);
      }
    });
    return sum;
  };
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order.order);
  const [burgerNoOrder, setBurgerNoOrder] = useState(true);
  const [noOrder, setNoOrder] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (order.length) {
      setNoOrder(false);
    }
  }, []);

  const handleOpen = () => {
    if (order.length) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(deleteOrder());
    dispatch(payOrder(order));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box>
            {noOrder ? (
              <Paper sx={{
                height: '100px',
                p: 4,
                m: 2,
                textAlign: 'center',
              }}
              >
                You are still hungry
              </Paper>
            )
              : order.map((item) => (
                <Paper key={`${item.key}${item.id}`}>
                  <OrderItem
                    key={item.key}
                    item={item}
                    name={item.name}
                    price={item.price}
                    setBurgerOrder={setBurgerNoOrder}
                  />
                  {item.modifiers ? item.modifiers.map((modifier) => (
                    <OrderItem
                      key={modifier.keyModifiers}
                      item={modifier}
                      name={modifier.name}
                      price={modifier.price}
                      type={modifier.type}
                    />
                  )) : '' }
                </Paper>
              ))}
            <Paper sx={{
              display: 'flex',
              justifyContent: 'space-around',
              p: 2,
              m: 2,
            }}
            >
              <Typography>Sum:</Typography>
              <Typography>{order.length ? `${getOrderSum(order)} $` : '0$'}</Typography>

            </Paper>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          >
            <Button variant="contained" onClick={handleOpen}>
              Pay
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Total
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {getOrderSum(order)}
                  {' '}
                  $
                </Typography>
                <Button variant="contained" onClick={handleClose}>Are ready to pay money</Button>
              </Box>
            </Modal>

            <Button variant="contained" onClick={() => dispatch(deleteOrder())}>
              Delete
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductsList
            setNoBurgerOrder={setBurgerNoOrder}
            burgerNoOrder={burgerNoOrder}
            setNoOrder={setNoOrder}
          />

        </Grid>
      </Grid>

    </Container>
  );
}

export default Order;
