import { User } from "@datatypes/types";

export const usersSlicer = (users: User[], currentPage: number): User[] => {
  return users.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);
};
