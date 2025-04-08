import React from "react";
import { AppBar, Button, Divider, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar sx={{ display: "flex", height: "4rem" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" component="div">
                    Мой курс
                </Typography>
                <Button variant="contained" color="secondary">
                    Войти
                </Button>
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default Navbar;
