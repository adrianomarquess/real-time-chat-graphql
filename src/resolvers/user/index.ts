import { v4 as uuidv4 } from "uuid";
import { addUser, getUsers } from "../../data";

export const createUserResolver = (_, { name }) => {
  const userId = uuidv4();

  addUser({ userId, name });

  return {
    userId,
    name,
  };
};

export const getUsersResolver = () => getUsers();
