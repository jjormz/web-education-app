import React from "react";
import { Box, Divider, List, ListItem, ListItemButton } from "@mui/material";

const MenuBar = () => {
    return (
        <aside>
            <Box
                sx={{
                    width: "20rem",
                    marginTop: "4rem",
                    height: "calc(100vh - 4rem)",
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                }}
            >
                <List sx={{ paddingLeft: "0.6rem" }}>
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
                        <ListItemButton
                            sx={{
                                width: "100%",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px",
                            }}
                        >
                            Все курсы
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Box>
        </aside>
    );
};

export default MenuBar;
