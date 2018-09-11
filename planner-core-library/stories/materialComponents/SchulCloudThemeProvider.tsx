import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#b10438' }, // Purple and green play nicely together.
    secondary: { main: '#009688' } // This is just green.A700 as hex.
  }
});

function SCTheme({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default SCTheme;
