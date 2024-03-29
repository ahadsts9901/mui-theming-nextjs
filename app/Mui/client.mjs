import '@fontsource/league-spartan/300.css';
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/500.css';
import '@fontsource/league-spartan/700.css';

import { createTheme } from '@mui/material/styles';

export const md2Theme = createTheme({
    palette: {
        primary: {
            light: '#4D7E99',
            main: '#447088',
            dark: '#3C6277',
            contrastText: '#EEF4F6',
        },
        secondary: {
            light: '#BCD4DC',
            main: '#9BBECA',
            dark: '#79A9B9',
            contrastText: '#111E22',
        },
        success: {
            light: '#19B373',
            main: '#138656',
            dark: '#0D5939',
            contrastText: '#E9FCF4',
        },
        error: {
            light: '#F07575',
            main: '#EE5D5D',
            dark: '#EC4646',
            contrastText: '#FCE8E8',
        },
        warning: {
            light: '#F4E98B',
            main: '#F1E574',
            dark: '#F0E15C',
            contrastText: '#453F07',
        },
        info: {
            light: '#0081CC',
            main: '#0071B3',
            dark: '#006199',
            contrastText: '#E6F6FF',
        },
        grey: {
            light: '#5F7686',
            main: '#556977',
            dark: '#4A5C68',
            contrastText: '#F0F3F4',
        },
        text: {
            primary: '#0F1924',
            secondary: '#172636',
        },
        background: {
            default: '#F8FAFC',
        },
    },
    typography: {
        fontFamily: 'League Spartan, sans-serif',
        textTransform: 'none',
    },
    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '50px',
                }
            }
        }
    }
});

export const md3Theme = createTheme();