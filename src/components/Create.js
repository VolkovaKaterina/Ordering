import React, { useEffect, useState } from 'react';
import {
  Box, Button, Card, CardMedia, Container, FormControl, Stack, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createModifier, createProduct, editModifier, editProduct,
} from '../actions';
import { getItem } from '../api/apiRequests';

const Create = ({ type }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState('');
  const [itemId, setItemId] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const temId = id.replace(/[^+\d]/g, '');
      (async () => {
        const { data } = await getItem(type, temId);
        setName(data.name);
        setPicture(data.picture);
        setPrice(data.price);
        setItemId(data.id);
      })();
    } else {
      setName('');
      setPicture('');
      setPrice('');
      setItemId('');
    }
  }, [id]);
  console.log(type);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      type,
      price: parseInt(price, 10),
      picture,
    };
    if (type === 'products') {
      if (id) {
        dispatch(editProduct(type, itemId, newItem));
      } else {
        dispatch(createProduct(type, newItem));
      }
    } if (type === 'modifiers') {
      if (id) {
        dispatch(editModifier(type, itemId, newItem));
      } else {
        dispatch(createModifier(type, newItem));
      }
    }
    navigate('/');
  };
  return (
    <Container sx={{ height: '100vh' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        autoComplete="off"
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Typography variant="h6">
            {type.toUpperCase()}
            {' '}
            PAGE
          </Typography>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => onFormSubmit(e)}
          >
            Create
            {' '}
            {type}
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
        >
          <FormControl
            fullWidth
            sx={{
              mr: 2,
            }}
          >
            <Stack spacing={2}>
              <TextField
                required
                value={name}
                id="standard-size-normal"
                variant="outlined"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                value={price}
                id="standard-size-normal"
                variant="outlined"
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                required
                value={picture}
                id="standard-size-normal"
                variant="outlined"
                label="Picture"
                onChange={(e) => setPicture(e.target.value)}
              />
            </Stack>
          </FormControl>

          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              height="200"
              image={picture}
              alt={name}
            />

          </Card>

        </Box>
      </Box>
    </Container>
  );
};

export default Create;
