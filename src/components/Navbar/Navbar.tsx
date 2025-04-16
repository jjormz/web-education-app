import React from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Divider,
    Toolbar,
    Typography,
} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar sx={{ display: "flex", height: "4rem", boxShadow: "none" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ textDecoration: "underline" }}
                >
                    Мой курс
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "10rem",
                        justifyContent: "space-between",
                    }}
                >
                    <Avatar
                        src="../../assets/test-avatar.jpg"
                        alt="User User"
                        sx={{
                            cursor: "pointer",
                        }}
                    />
                    <Button variant="contained" color="secondary">
                        Войти
                    </Button>
                </Box>
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default Navbar;
