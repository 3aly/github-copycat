import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./ContactData.styles";

import { LineSeparator } from "@components/atoms";
import { UserData } from "@datatypes/types";
import LinkIcon from "@mui/icons-material/Link";

const ContactData = ({
  login,
  name,
  avatar_url,
  followers,
  following,
  blog,
  location,
  company,
}: UserData) => {
  const { classes } = useStyles();

  return (
    <div className={classes.detailsContainer}>
      <Avatar src={avatar_url} className={classes.avatar} alt={login} />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h6" color={"text.primary"}>
        {login}
      </Typography>

      <div className={classes.iconContainer}>
        <LinkIcon fontSize={"small"} sx={{ marginInlineEnd: 1 }} />
        <Typography className={classes.info}>
          <a className={classes.link} href={blog}>
            {blog}
          </a>
        </Typography>
      </div>
      <LineSeparator orientation="horizontal" />

      <Typography className={classes.info}>Location: {location}</Typography>
      <Typography className={classes.info}>Company: {company}</Typography>
    </div>
  );
};

export default ContactData;
