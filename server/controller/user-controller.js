import User from "../model/user.js";
export const signupUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = new User (user);
  } catch (error) {}
};
