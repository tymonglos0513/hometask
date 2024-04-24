import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: `rgb(33, 37, 41)`,
            light: `rgb(53, 57, 61)`,
            dark: `rgb(196, 196, 196)`,
        },
        secondary: {
            main: `rgb(255, 255, 255)`,
            dark: `rgba(255, 255, 255, 0.7)`,
            light: `rgba(255, 255, 255, 0.9)`,
        },
        info: {
            main: `rgb(102, 16, 242)`,
        },
        background: {
            default: `rgba(255, 255, 255, 1)`,
            paper: `rgba(255, 255, 255, 0.7)`
        }
    },
    typography: {

    },
});