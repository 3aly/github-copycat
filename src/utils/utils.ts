import { User } from "@datatypes/types";

export const usersSlicer = (
  users: User[],
  currentPage: number
): { total: number; sliced: User[] } => {
  return {
    total: users.length,
    sliced: users.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5),
  };
};
export function generateRandomNumber(): number {
  // Generate a random decimal number between 0 and 1
  const randomNumber = Math.random();

  // Scale the random number to be between 1 and 50
  // Math.floor rounds down to the nearest integer
  // Multiply by 50 to make it between 0 and 49, then add 1 to shift the range to 1 to 50
  const scaledNumber = Math.floor(randomNumber * 50) + 1;

  return scaledNumber;
}

export const linkOpener = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
