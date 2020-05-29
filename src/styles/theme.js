import React, { useContext, useState } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#2c63bf', light: '#a6c7ff', dark: '#002159' },
    //secondary: { light: '#0066ff', main: '#0044ff' },
  },
});

export default theme;
