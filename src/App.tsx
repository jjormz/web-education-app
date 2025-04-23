import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/MenuBar";
import MainView from "./components/MainView/MainView";
import theme from "./theme/theme";
import CoursePage from "./components/MainView/CoursePage/CoursePage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Box sx={{ display: "flex" }}>
                    <MenuBar />
                    <Routes>
                        <Route path="/courses" element={<MainView />} />
                        <Route
                            path="/courses/:courseId"
                            element={<CoursePage />}
                        />
                    </Routes>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
