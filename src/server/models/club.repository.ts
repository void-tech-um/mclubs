import { Club } from "./models";
import { User } from "./models";

/**
 * @desc Create a new user
 * @param {User} user
 * @returns {Promise<User | boolean>} Created user or false if user already exists
 */
export const createClub = async (club: Club): Promise<Club | boolean> => {
  const a = await Club.create(club);
  console.log(a);
  return a;
};
/**
 * @desc Check if user exists and return user
 * @param {User} user object
 * @returns {Promise<User | null>} Username or false if user does not exist or password is incorrect
 */
export const getClubs = async (): Promise<Club[] | null> => {
  /** @todo Implement the function */
  // Remove this return statement
  const found = await Club.findAll();
  return found; // This is to make the compiler happy
};

export const getClub = async (club: string): Promise<Club | null> => {
  /** @todo Implement the function */
  // Remove this return statement
  const found = await Club.findByPk(club);
  return found; // This is to make the compiler happy
};

export const clubExists = async (club: Club): Promise<Club | null> => {
  return null;
};
