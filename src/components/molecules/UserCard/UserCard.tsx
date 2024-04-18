import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { UserCardProps } from "@datatypes/props";
import { useStyles } from "./UserCard.styles";
import PeopleIcon from "@mui/icons-material/People";
import { GitHub } from "@mui/icons-material";
import { generateRandomNumber } from "@utils/utils";
import { useNavigate } from "react-router-dom";
import { quickStyles } from "@constants/theme";
import { Box } from "@mui/material";

const UserCard = ({ login, avatar_url, html_url }: UserCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${login}`);
  };
  return (
    <CardActionArea className={classes.container} onClick={handleCardClick}>
      <Box className={classes.content}>
        <Avatar src={avatar_url} alt={login} className={classes.avatar} />
        <Box className={classes.titleContainer}>
          <Typography
            color={"text.primary"}
            variant="h6"
            component="div"
            className={classes.responsiveText}
          >
            {login}
          </Typography>
          <Typography
            color={"text.primary"}
            variant="body2"
            className={classes.responsiveText}
          >
            {html_url}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.iconsContainer}>
        <Box className={classes.icons}>
          <PeopleIcon
            color={"action"}
            sx={quickStyles.responsiveSmallIcons}
            className={classes.icon}
          />
          <Typography
            color={"text.primary"}
            variant="body2"
            className={classes.responsiveNumbers}
          >
            {generateRandomNumber()}
          </Typography>
        </Box>
        <Box className={classes.icons}>
          <GitHub
            color={"action"}
            sx={quickStyles.responsiveSmallIcons}
            className={classes.icon}
          />
          <Typography
            color={"text.primary"}
            variant="body2"
            className={classes.responsiveNumbers}
          >
            {generateRandomNumber()}
          </Typography>
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default UserCard;
