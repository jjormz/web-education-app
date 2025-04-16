import { Box } from "@mui/material";
import React from "react";
import CourseCard from "../CourseCard/CourseCard";

const MainView = () => {
    const cartCount = Math.floor(Math.random() * (15 - 4 + 1) + 4);
    const cards = Array.from({ length: cartCount });
    const gradients = [
        "linear-gradient(45deg, #6441A5, #2a0845)",
        "linear-gradient(45deg, #000428, #004e92)",
        "linear-gradient(45deg, #42275a, #734b6d)",
        "linear-gradient(45deg, #2C3E50, #FD746C)",
        "linear-gradient(45deg, #2C7744, #5A3F37)",
        "linear-gradient(45deg, #FFA17F, #00223E)",
        "linear-gradient(45deg, #360033, #0b8793)",
        "linear-gradient(45deg, #2E1437, #948E99)",
        "linear-gradient(45deg, #1e130c, #9a8478)",
        "linear-gradient(45deg, #373B44, #73C8A9)",
        "linear-gradient(45deg, #780206, #061161)",
        "linear-gradient(45deg, #4B1248, #F0C27B)",
        "linear-gradient(45deg, #c21500, #ffc500)",
        "linear-gradient(45deg, #FC354C, #0ABFBC)",
        "linear-gradient(45deg, #49a09d, #5f2c82)",
        "linear-gradient(45deg, #4A569D, #DC2424)",
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                paddingLeft: "2rem",
                paddingTop: "2rem",
                marginLeft: "18rem",
                marginTop: "4rem",
                width: "calc(100vw - 18rem)",
                height: "calc(100vh - 4rem)",
            }}
        >
            {cards.map((_, index) => (
                <CourseCard
                    key={index}
                    headerGradients={
                        gradients[Math.floor(Math.random() * gradients.length)]
                    }
                />
            ))}
        </Box>
    );
};

export default MainView;
