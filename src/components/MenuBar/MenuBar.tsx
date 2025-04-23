import React, { useState, useEffect } from "react";
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getAllCourses, ICourse } from "../../data";

const MenuBar = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesData = await getAllCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error("Ошибка загрузки курсов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                paddingLeft: "0.5rem",
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
                        component={Link}
                        to="/courses"
                        sx={{
                            width: "100%",
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            "&.active": {
                                bgcolor: "primary.dark",
                            },
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
                        {loading ? (
                            <Typography sx={{ pl: 4 }}>Загрузка...</Typography>
                        ) : courses.length > 0 ? (
                            courses.map(course => (
                                <ListItemButton
                                    key={course.id}
                                    component={Link}
                                    to={`/courses/${course.id}`}
                                    sx={{
                                        width: "100%",
                                        borderTopLeftRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        "&.active": {
                                            bgcolor: "primary.dark",
                                        },
                                    }}
                                >
                                    <ListItemText primary={course.title} />
                                </ListItemButton>
                            ))
                        ) : (
                            <Typography sx={{ pl: 4 }}>
                                Нет доступных курсов
                            </Typography>
                        )}
                    </List>
                </Collapse>
            </List>
        </Box>
    );
};

export default MenuBar;
