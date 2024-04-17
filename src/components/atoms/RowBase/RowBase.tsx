import { Link, Typography } from "@mui/material";
import { RowBaseProps } from "@datatypes/props";
import PeopleIcon from "@mui/icons-material/People";
import { GitHub } from "@mui/icons-material";
import { useStyles } from "./RowBase.styles";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import LinkIcon from "@mui/icons-material/Link";
import { quickStyles } from "@constants/theme";

const RowBase = ({ icon, title, link, number }: RowBaseProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.icon}>
      {icon === "Link" && (
        <LinkIcon
          sx={{ ...quickStyles.responsiveIcons, marginInlineEnd: 1 }}
          color={"action"}
          fontSize={"small"}
        />
      )}
      {icon === "People" && (
        <PeopleIcon
          sx={{ ...quickStyles.responsiveIcons, marginInlineEnd: 1 }}
          color={"action"}
          fontSize={"small"}
        />
      )}
      {icon === "GitHub" && (
        <GitHub
          sx={{ ...quickStyles.responsiveIcons, marginInlineEnd: 1 }}
          color={"action"}
          fontSize={"small"}
        />
      )}
      {icon === "Repo" && (
        <TurnedInNotIcon
          sx={{ ...quickStyles.responsiveIcons, marginInlineEnd: 1 }}
          color={"action"}
          fontSize={"small"}
        />
      )}
      {icon === "Gist" && (
        <CardMembershipIcon
          sx={{ ...quickStyles.responsiveIcons, marginInlineEnd: 1 }}
          color={"action"}
          fontSize={"small"}
        />
      )}
      {icon === "Link" ? (
        <Link className={classes.link} href={link} color={"text.primary"}>
          {link}
        </Link>
      ) : (
        <>
          <Typography
            color={"text.primary"}
            fontWeight={"bold"}
            className={classes.responsiveText}
          >
            {title}
          </Typography>
          <Typography
            className={classes.responsiveText}
            color={"text.primary"}
            fontWeight={"bold"}
            sx={{ mx: 0.5 }}
          >
            {number}
          </Typography>
        </>
      )}
    </div>
  );
};

export default RowBase;
