import React, { useEffect, useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useSelector } from 'react-redux';
import ProductsItem from './ProductsItem';
import usePagination from './Pagination';

const ProductsList = ({ setNoBurgerOrder, burgerNoOrder, setNoOrder }) => {
  const KEYS = {
    products: useSelector((state) => state.products),
    modifiers: useSelector((state) => state.modifiers),
  };

  const [value, setValue] = useState('products');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(data.length / PER_PAGE);
  const PAGINATOR = usePagination(data, PER_PAGE);

  useEffect(() => {
    setData(KEYS.products);
  }, [KEYS.products]);

  const handleChange = (e, p) => {
    setPage(p);
    PAGINATOR.jump(p);
  };
  const tabChange = (event, newValue) => {
    setValue(newValue);
    setData(KEYS[newValue]);
    if (value === 'modifiers') {
      setNoBurgerOrder(true);
    }
  };
  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={tabChange}>
              {Object.keys(KEYS)
                .map((item) => (
                  <Tab
                    key={item}
                    label={item}
                    value={item}
                    disabled={item === 'modifiers' ? burgerNoOrder : null}
                  />
                ))}

            </TabList>
          </Box>
          {
            Object.keys(KEYS)
              .map((key) => (
                <TabPanel key={key} value={key}>
                  <Grid container spacing={2}>
                    {PAGINATOR.currentData()
                      .map((item) => (
                        <ProductsItem
                          key={item.name}
                          type={item.type}
                          item={item}
                          setNoOrder={setNoOrder}

                        />
                      ))}
                  </Grid>
                </TabPanel>
              ))
          }

        </TabContext>
      </Box>

      <Box sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      >
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Box>

    </>
  );
};

export default ProductsList;
