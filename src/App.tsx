import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/MenuBar";
import theme from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <MenuBar />
        </ThemeProvider>
    );
}

export default App;
