import React from "react";

import { useStyles } from "./Footer.styles";
import { Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { linkOpener } from "@utils/utils";
import { GitHub } from "@mui/icons-material";
import { quickStyles } from "@constants/theme";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.footer} spacing={2}>
        <Grid item className={classes.copyRight}>
          <Typography variant="body1" className={classes.responsiveText}>
            {t("copyrights")}
          </Typography>
        </Grid>
        <Grid item className={classes.socialMedia}>
          <IconButton
            sx={quickStyles.responsiveIcons}
            onClick={() => linkOpener("https://www.instagram.com/3aly_7efny")}
          >
            <InstagramIcon color={"action"} sx={quickStyles.responsiveIcons} />
          </IconButton>
          <IconButton
            sx={quickStyles.responsiveIcons}
            onClick={() =>
              linkOpener("https://www.linkedin.com/in/ali-hefny-b8087723a/")
            }
          >
            <LinkedInIcon color={"action"} sx={quickStyles.responsiveIcons} />
          </IconButton>
          <IconButton>
            <XIcon color={"action"} sx={quickStyles.responsiveIcons} />
          </IconButton>
          <IconButton onClick={() => linkOpener("https://github.com/3aly")}>
            <GitHub color={"action"} sx={quickStyles.responsiveIcons} />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
