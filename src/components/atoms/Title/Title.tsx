import { Typography } from "@mui/material";
import { useStyles } from "./Title.styles";

const Title = ({ title }: { title: string }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h3" color={"text.primary"}>
        {title}:
      </Typography>
    </div>
  );
};

export default Title;
