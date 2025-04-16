import React, { useState } from "react";
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const MenuBar = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: 10,
                width: "18rem",
                marginTop: "4rem",
                height: "calc(100vh - 4rem)",
                bgcolor: "primary.main",
                color: "primary.contrastText",
            }}
        >
            <List>
                <ListItem
                    disablePadding
                    sx={{
                        gap: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <ListItemButton
                        sx={{
                            width: "100%",
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                        }}
                    >
                        Главная
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Мои курсы" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{
                                width: "100%",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px",
                            }}
                        >
                            Матеша
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                width: "100%",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px",
                            }}
                        >
                            Русич
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Box>
    );
};

export default MenuBar;
