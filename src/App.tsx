import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/MenuBar";
import MainView from "./components/MainView/MainView";
import theme from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <MenuBar />
                <MainView />
            </Box>
        </ThemeProvider>
    );
}

export default App;
