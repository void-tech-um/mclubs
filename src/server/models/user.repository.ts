import { User } from "./models";

/**
 * @desc Create a new user
 * @param {User} user
 * @returns {Promise<User>} Created user or throw error if user already exists
 */
export const createUser = async (user: User): Promise<User> => {
  console.log("before create user", user);
  const newUser = await User.create(user);
  console.log("after create user", newUser);
  if (!newUser) {
    throw new Error("User already exists");
  }
  return newUser;
};

/**
 * @desc Check if user exists and return user
 * @param {User} user object
 * @returns {Promise<User | null>} Username or false if user does not exist or password is incorrect
 */
export const userExists = async (user: User): Promise<User> => {
  /** @todo Implement the function */
  // Remove this return statement
  const found = await User.findOne({ where: { username: user.username } });
  if (!found) {
    throw new Error("User does not exist");
  }
  return found;
};
