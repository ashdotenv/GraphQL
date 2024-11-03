import { Course } from "../models/course.model.js";

export const getAllCourses = async () => {
  return await Course.find();
};
export const getCourseById = async (parent: any, arg: { id: string }) => {
  const course = Course.findById(arg.id);
  console.log(course);
  return course;
};
