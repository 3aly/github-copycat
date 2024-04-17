import { Typography } from "@mui/material";
import { useStyles } from "./Title.styles";

const Title = ({ title, count }: { title: string; count: number }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h3"
        color={"text.primary"}
        className={classes.responsiveText}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        color={"text.primary"}
        sx={{ mx: 1 }}
        className={classes.responsiveText}
      >
        {count}
      </Typography>
    </div>
  );
};

export default Title;
