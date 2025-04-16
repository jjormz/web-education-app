import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
            paper: "#fefefe",
        },
        primary: {
            main: "#f1f1f1",
        },
        secondary: {
            main: "#4169e1",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
});

export default theme;
