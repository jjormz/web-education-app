import React, { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import AuthForm from "../AuthForm/AuthForm";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [openedAuthForm, setOpenedAuthForm] = useState(false);
    const [openedRegForm, setOpenedRegForm] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorEl);

    const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handlerRegOpen = () => {
        setOpenedRegForm(!openedRegForm);
    };

    const handlerCloseRegForm = () => {
        setOpenedRegForm(false);
    };

    const handleAuthOpen = () => {
        setOpenedAuthForm(!openedAuthForm);
    };

    const handleCloseAuthForm = () => {
        setOpenedAuthForm(false);
    };

    return (
        <AppBar sx={{ display: "flex", height: "4rem", boxShadow: "none" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "4rem",
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    color="black"
                    component={Link}
                    to="/courses"
                    sx={{
                        fontWeight: "600",
                        textDecoration: "none",
                        "&:hover": {
                            color: "royalblue",
                        },
                    }}
                >
                    Coursium
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "25rem",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="text"
                        color="contrastText"
                        aria-controls={openProfile ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openProfile ? "true" : undefined}
                        onClick={handleProfileClick}
                    >
                        Иван Иванов
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openProfile}
                        onClose={handleProfileClose}
                        sx={{ width: "20rem" }}
                    >
                        <MenuItem onClick={handleProfileClose}>Тема</MenuItem>
                        <MenuItem onClick={handleProfileClose}>
                            Настройки
                        </MenuItem>
                        <MenuItem onClick={handleProfileClose}>Выйти</MenuItem>
                    </Menu>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleAuthOpen}
                    >
                        Войти
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            "&:hover": {
                                color: "white",
                                background: "royalblue",
                            },
                        }}
                        onClick={handlerRegOpen}
                    >
                        Регистрация
                    </Button>
                </Box>
            </Toolbar>
            <Divider />
            <AuthForm isOpened={openedAuthForm} onClose={handleCloseAuthForm} />
            <RegistrationButton
                isOpened={openedRegForm}
                onClose={handlerCloseRegForm}
            />
        </AppBar>
    );
};

export default Navbar;
