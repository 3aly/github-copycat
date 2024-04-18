import { Layout } from "@datatypes/types";

export const responsiveIcons = { fontSize: { xs: 15, sm: 22, md: 25, lg: 30 } };
export const responsiveSmallIcons = {
  fontSize: { xs: 10, sm: 13, md: 15, lg: 18 },
};

export const responsiveGrid = { xs: 0, sm: 9, md: 2, lg: 0 };
export const layouts: { [key: string]: Layout } = {
  row: { flexDirection: "row", display: "flex" },
  col: { flexDirection: "column", display: "flex" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  xCentered: { justifyContent: "center" },
  yCentered: { alignItems: "center" },
  alignedEnd: { alignItems: "flex-end" },
  alignStart: { alignItems: "flex-start" },
  flexed: { flex: 1 },
  allCentered: { justifyContent: "center", alignItems: "center" },
  selfStart: { alignSelf: "flex-start" },
  selfEnd: { alignSelf: "flex-end" },
  selfCenter: { alignSelf: "center" },
  contentStart: { alignContent: "flex-start" },
  contentCenter: { alignContent: "center" },
};
