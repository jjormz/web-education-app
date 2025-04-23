import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { FC } from "react";
import RegistrationButton from "../RegistrationButton/RegistrationButton";

interface AuthFormProps {
    isOpened: boolean;
    onClose: () => void;
}

const AuthForm: FC<AuthFormProps> = ({ isOpened, onClose }) => {
    return (
        <Dialog onClose={onClose} open={isOpened}>
            <Box
                sx={{
                    display: "flex",
                    width: "35rem",
                    height: "20rem",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <DialogTitle sx={{ width: "fit-content" }}>
                    Авторизация
                </DialogTitle>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%", marginTop: "1rem" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Пароль"
                        type="password"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%", marginTop: "1rem" }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "3rem",
                    }}
                >
                    <Button variant="contained" color="secondary">
                        Войти
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default AuthForm;
