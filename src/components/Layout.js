import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const useStyles = makeStyles(() => createStyles({
  page: {
    background: '#ffffff',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,

  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &:focus, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const theme = createTheme();

const Layout = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  const menuItems = [
    {
      text: 'Ordering',
      path: '/',
      url: 'https://source.unsplash.com/yIaHWXTA_TQ',
      disabled: false,
      width: '25%',
    },
    {
      text: 'Create Product',
      path: '/product',
      url: 'https://source.unsplash.com/hyIE90CN6b0',
      disabled: false,
      width: '25%',
    },
    {
      text: 'Create Modifer',
      path: '/modifier',
      url: 'https://source.unsplash.com/VRB1LJoTZ6w',
      disabled: false,
      width: '25%',
    },
    {
      text: 'Bundle',
      path: '/bundler',
      url: 'https://source.unsplash.com/LUtsF-83mk0',
      disabled: true,
      width: '25%',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container>
          <nav>
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',
            }}
            >
              {menuItems.map((item) => (
                <ImageButton
                  focusRipple
                  key={item.text}
                  className={classes.active}
                  disabled={item.disabled}
                  onClick={() => navigate(item.path)}
                  style={{
                    width: item.width,
                  }}
                >

                  <ImageSrc style={{ backgroundImage: `url(${item.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        fontSize: 20,
                      }}
                    >
                      {item.text}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </nav>
        </Container>
        <div className={classes.page}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
