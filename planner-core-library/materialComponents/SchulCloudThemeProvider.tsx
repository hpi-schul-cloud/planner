import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#b10438' },
    secondary: { main: '#009688' }
  }
});

function SCTheme({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default SCTheme;
