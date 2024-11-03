import { getAllCourses, getCourseById, } from "../controllers/course.controller.js";
import { getAllUsers } from "../controllers/user.controller.js";
let users = [];
export const graphQlResolver = {
    Query: {
        users: getAllUsers,
        courses: getAllCourses,
        course: getCourseById,
    },
    Mutation: {
        newUser: (parent, { name, age, gender }) => {
            users.push({ name, age, gender });
            console.log(users);
            return users[0];
        },
    },
};
