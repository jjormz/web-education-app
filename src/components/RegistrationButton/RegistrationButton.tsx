import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { FC } from "react";

interface RegFormProps {
    isOpened: boolean;
    onClose: () => void;
}

const RegistrationButton: FC<RegFormProps> = ({ isOpened, onClose }) => {
    return (
        <Dialog onClose={onClose} open={isOpened}>
            <Box
                sx={{
                    display: "flex",
                    width: "35rem",
                    height: "30rem",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <DialogTitle sx={{ width: "fit-content" }}>
                    Регистрация
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
                        label="Имя"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Фамилия"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%", marginTop: "1rem" }}
                    />
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
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        "&:hover": {
                            color: "white",
                            background: "royalblue",
                        },
                    }}
                >
                    Регистрация
                </Button>
            </Box>
        </Dialog>
    );
};

export default RegistrationButton;
