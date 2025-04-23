// components/CoursePage/CoursePage.tsx
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CourseSection from "./CourseSection/CourseSection";
import AddIcon from "@mui/icons-material/Add";
import CreateModal from "../../CreateModal/CreateModal";
import { getCourseById, ICourse } from "../../../data";

const CoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState<ICourse | null>(null);
    const [openedCreateModal, setOpenedCreateModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!courseId) {
            setIsLoading(false);
            return;
        }

        const fetchCourse = async () => {
            try {
                const foundCourse = await getCourseById(courseId);
                setCourse(foundCourse || null);
            } catch (error) {
                console.error("Failed to fetch course:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourse();
    }, [courseId]);

    if (!course) {
        return <Typography>Курс не найден</Typography>;
    }

    return (
        <Box
            sx={{
                gap: "1.6rem",
                flexWrap: "wrap",
                padding: "2rem",
                marginLeft: "18rem",
                marginTop: "4rem",
                width: "100%",
                height: "fit-content",
            }}
        >
            <Paper
                variant="outlined"
                sx={{ padding: "1rem", marginBottom: "1rem" }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "500",
                        marginBottom: "0.5rem",
                    }}
                >
                    {course.title}
                </Typography>
                <Divider />
                <Typography
                    variant="h6"
                    sx={{
                        marginTop: "0.5rem",
                        marginBottom: "1rem",
                        textWrap: "balance",
                    }}
                >
                    {course.description}
                </Typography>
                <Typography variant="h6" color="grey">
                    {course.author}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setOpenedCreateModal(true)}
                >
                    <AddIcon />
                </Button>
            </Paper>
            <CourseSection />
            <CreateModal
                isOpened={openedCreateModal}
                onClose={() => setOpenedCreateModal(false)}
            />
        </Box>
    );
};

export default CoursePage;
