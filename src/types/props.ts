import { IconsTypes } from "./types";

export interface TaskType {}

// export interface User {
//   login: string;
//   avatar_url: string;
//   html_url: string;
// }
export interface UserCardProps {
  login: string;
  avatar_url: string;
  html_url: string;
}
export interface PaginationProps {
  total: number; // Total number of users
  currentPage: number; // Current page number
  onPageChange: (page: number) => void; // Function to handle page change
}
export interface LineSeparatorProps {
  orientation?: "horizontal" | "vertical"; // Optional, defaults to 'horizontal'
}
export interface RowBaseProps {
  icon: IconsTypes; // Optional, defaults to 'horizontal'
  title?: string | number; // Optional
  number?: number; //
  link?: string; // Optional
}
