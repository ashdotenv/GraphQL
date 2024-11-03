import { Course } from "../models/course.model.js";
export const getAllCourses = async () => {
    return await Course.find();
};
export const getCourseById = async (parent, arg) => {
    const course = Course.findById(arg.id);
    console.log(course);
    return course;
};
