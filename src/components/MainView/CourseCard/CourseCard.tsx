import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ICourse } from "../../../data";

interface CourseCardProps {
    course: ICourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/courses/${course.id}`);
    };

    return (
        <Paper
            onClick={handleClick}
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
                    padding: "10px",
                }}
            >
                <Typography
                    variant="h6"
                    color="contrastText"
                    sx={{ textWrap: "balance" }}
                >
                    {course.title}
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
                    {course.description}
                </Typography>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <Typography color="grey">{course.author}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CourseCard;
