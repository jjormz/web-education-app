import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { FC } from "react";

interface CreateModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateModal: FC<CreateModalProps> = ({ isOpened, onClose }) => {
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
                    Создать урок
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
                        label="Название"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Описание"
                        variant="outlined"
                        color="secondary"
                        sx={{ width: "70%", marginTop: "1rem" }}
                    />
                </Box>
                <Button variant="contained" color="secondary">
                    Создать
                </Button>
            </Box>
        </Dialog>
    );
};

export default CreateModal;
