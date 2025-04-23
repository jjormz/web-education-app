import { Box } from "@mui/material";
import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import CoursePage from "../CoursePage/CoursePage";
import { getAllCourses } from "../../../data";

const MainView = () => {
    const courses = getAllCourses();

    return (
        <Box
            sx={{
                display: "flex",
                gap: "1.6rem",
                flexWrap: "wrap",
                padding: "2rem",
                marginLeft: "18rem",
                marginTop: "4rem",
                width: "100%",
                height: "fit-content",
            }}
        >
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </Box>
    );
};

export default MainView;
