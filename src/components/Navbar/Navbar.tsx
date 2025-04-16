import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Divider,
    Toolbar,
    Typography,
} from "@mui/material";
import AuthForm from "../AuthForm/AuthForm";
import RegistrationButton from "../RegistrationButton/RegistrationButton";

const Navbar = () => {
    const [openedAuthForm, setOpenedAuthForm] = useState(false);
    const [openedRegForm, setOpenedRegForm] = useState(false);

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
                    sx={{ textDecoration: "underline" }}
                >
                    Мой курс
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "20rem",
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
