import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./ContactData.styles";

import { LineSeparator, RowBase } from "@components/atoms";
import { UserData } from "@datatypes/types";
import LinkIcon from "@mui/icons-material/Link";

const ContactData = ({
  login,
  name,
  avatar_url,
  blog = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint pariatur in porro animi ipsam modi, qui id? Ea quasi quaerat ipsa dolor rem veritatis quam error. Veritatis, tenetur quas",
  location,
  company,
}: UserData) => {
  const { classes } = useStyles();

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
          <Typography className={classes.info} color={"text.primary"}>
            Location: {location}
          </Typography>
        )}
        {company && (
          <Typography className={classes.info} color={"text.primary"}>
            Company: {company}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ContactData;
