import { Paper, Typography } from "@mui/material";
import React from "react";

const CourseSection = () => {
    return (
        <Paper
            elevation={1}
            sx={{
                padding: "1rem",
                height: "4rem",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    boxShadow: "5",
                },
            }}
        >
            <Typography>Title1</Typography>
        </Paper>
    );
};

export default CourseSection;
