export interface ICourse {
    id: string;
    title: string;
    description: string;
    author: string;
}

export const mockCourses: ICourse[] = [
    {
        id: "1",
        title: "Рыбалочка",
        description:
            "Этот курс подходит всем тем, кто собирается стать топ1 СНГ по рыбалке.",
        author: "Илья Рожков",
    },
    {
        id: "2",
        title: "Охота",
        description:
            "Этот курс подходит всем тем, кто собирается стать топ1 СНГ по охоте.",
        author: "Даша Азарова",
    },
];

export const getCourseById = async (
    id: string
): Promise<ICourse | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCourses.find((course: ICourse) => course.id === id);
};

export const getAllCourses = (): ICourse[] => {
    return mockCourses;
};
