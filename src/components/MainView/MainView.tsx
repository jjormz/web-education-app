import { Box } from "@mui/material";
import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import CoursePage from "./CoursePage/CoursePage";
import CourseList from "./CourseList/CourseList";

const MainView = () => {
    return (
        <Box>
            <CourseList />
            <CoursePage />
        </Box>
    );
};

export default MainView;
