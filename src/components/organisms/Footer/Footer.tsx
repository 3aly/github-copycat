import React from "react";

import { useStyles } from "./Footer.styles";
import { Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { linkOpener } from "@utils/utils";
import { GitHub } from "@mui/icons-material";

const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.socialMedia}>
          <IconButton
            onClick={() => linkOpener("https://www.instagram.com/3aly_7efny")}
          >
            <InstagramIcon color={"action"} />
          </IconButton>
          <IconButton
            onClick={() =>
              linkOpener("https://www.linkedin.com/in/ali-hefny-b8087723a/")
            }
          >
            <LinkedInIcon color={"action"} />
          </IconButton>
          <IconButton>
            <XIcon color={"action"} />
          </IconButton>
          <IconButton onClick={() => linkOpener("https://github.com/3aly")}>
            <GitHub color={"action"} />
          </IconButton>
        </Grid>
        <Grid item className={classes.copyRight}>
          <Typography variant="body2">
            © 2023 جميع الحقوق محفوظة لعلي حفني
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
