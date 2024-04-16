import { Divider, useTheme } from "@mui/material";
import { LineSeparatorProps } from "@datatypes/props";

const LineSeparator = ({ orientation = "horizontal" }: LineSeparatorProps) => {
  const theme = useTheme();
  return (
    <Divider
      orientation={orientation}
      color={"primary.main"}
      flexItem={orientation === "vertical"} // Use flexItem for vertical dividers in flex containers
      sx={{
        // Example styling; adjust as needed
        my: orientation === "horizontal" ? 2 : 0,
        width: orientation === "horizontal" ? "100%" : undefined,
        // borderWidth: 0.01,
        backgroundColor: theme.palette.text.primary,
        mx: orientation === "vertical" ? 2 : 0,
        height: orientation === "vertical" ? "100%" : undefined, // Full height for vertical orientation
      }}
    />
  );
};

export default LineSeparator;
