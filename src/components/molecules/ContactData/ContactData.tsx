import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./ContactData.styles";

import { LineSeparator, RowBase } from "@components/atoms";
import { UserData } from "@datatypes/types";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContactData = ({
  login,
  name,
  avatar_url,
  blog = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint pariatur in porro animi ipsam modi, qui id? Ea quasi quaerat ipsa dolor rem veritatis quam error. Veritatis, tenetur quas",
  location,
  company,
}: UserData) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.detailsContainer}>
      <Avatar src={avatar_url} className={classes.avatar} alt={login} />
      <Typography variant="h4" color={"text.primary"}>
        {name}
      </Typography>
      <Typography variant="h6" color={"text.secondary"}>
        {login}
      </Typography>
      <RowBase link={blog} icon="Link" />
      <LineSeparator orientation="horizontal" />

      <div className={classes.titleContainer}>
        {location && (
          <Box flexDirection={"row"} display={"flex"}>
            <Typography className={classes.info} color={"text.primary"}>
              {t("location")}:
            </Typography>
            <Typography className={classes.info} color={"text.primary"}>
              {location}
            </Typography>
          </Box>
        )}
        {company && (
          <Box flexDirection={"row"} display={"flex"}>
            <Typography className={classes.info} color={"text.primary"}>
              {t("company")}:
            </Typography>
            <Typography className={classes.info} color={"text.primary"}>
              {company}
            </Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

export default ContactData;
