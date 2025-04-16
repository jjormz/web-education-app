import { Avatar, Box, Paper, Typography } from "@mui/material";
import React, { FC } from "react";

interface CourseCardProps {
    headerGradients: string;
}

const CourseCard: FC<CourseCardProps> = ({ headerGradients }) => {
    return (
        <Paper
            sx={{
                height: "25rem",
                width: "23rem",
                cursor: "pointer",
                boxShadow: "1",
                "&:hover": {
                    boxShadow: "5",
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "5rem",
                    background: headerGradients,
                    padding: "10px",
                }}
            >
                <Typography
                    variant="h6"
                    color="primary.main"
                    sx={{ textWrap: "balance" }}
                >
                    Test course name
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    height: "20rem",
                }}
            >
                <Typography
                    variant="body2"
                    color="primary.contrastText"
                    sx={{ textWrap: "balance" }}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque fugit sint aperiam excepturi quas qui voluptatibus
                    unde quis ad similique odit velit, magni vitae in aspernatur
                    consequatur voluptas laborum. Inventore!
                </Typography>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <Avatar
                        sx={{ height: "2rem", width: "2rem" }}
                        alt="User"
                        src="../../assets/test-avatar.jpg"
                    ></Avatar>
                    <Typography color="grey">Author User</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CourseCard;
