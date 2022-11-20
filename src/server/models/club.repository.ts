import { Club } from "./models";
import { User } from "./models";

/**
 * @desc Create a new user
 * @param {User} user
 * @returns {Promise<User | boolean>} Created user or false if user already exists
 */
export const createClub = async (club: Club): Promise<Club | boolean> => {
  /** @todo Implement the function */
  // Remove this return statement
  return false; // This is to make the compiler happy
};

/**
 * @desc Check if user exists and return user
 * @param {User} user object
 * @returns {Promise<User | null>} Username or false if user does not exist or password is incorrect
 */
export const getClubs = async (club: User): Promise<User | null> => {
  /** @todo Implement the function */
  // Remove this return statement
  return null; // This is to make the compiler happy
};
