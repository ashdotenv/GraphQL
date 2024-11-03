import { User } from "../models/user.model.js";
export const getAllUsers = async () => {
    return await User.find();
};
