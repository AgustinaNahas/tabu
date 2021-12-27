import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            main: '#0044ff',
        },
        // contrastThreshold: 3,
        // tonalOffset: 0.2,
    },
});
function Theming(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}