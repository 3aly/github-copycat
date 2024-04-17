export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
export type ErrorType = { response: { data: { message: string } } };

export type UserData = {
  login?: string;
  name?: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
  blog?: string;
  location?: string;
  company?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
};

export type StoreType = {
  theme: { darkMode: boolean };
  loader: { isLoading: boolean };
};

export type IconsTypes = "GitHub" | "People" | "Link" | "Repo" | "Gist";
type FlexDirection = "row" | "column";
type JustifyContent =
  | "space-between"
  | "space-around"
  | "flex-start"
  | "flex-end"
  | "center";
type AlignItems = "center" | "flex-end" | "flex-start";

export interface Layout {
  flexDirection?: FlexDirection;
  display?: "flex";
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flex?: number;
  flexGrow?: number;
  alignSelf?: AlignItems;
  alignContent?: AlignItems;
}
