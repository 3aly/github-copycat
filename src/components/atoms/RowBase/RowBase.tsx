import { Link, Typography } from "@mui/material";
import { RowBaseProps } from "@datatypes/props";
import PeopleIcon from "@mui/icons-material/People";
import { GitHub } from "@mui/icons-material";
import { useStyles } from "./RowBase.styles";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import LinkIcon from "@mui/icons-material/Link";

const RowBase = ({ icon, title, link, number }: RowBaseProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.icon}>
      {icon === "Link" && (
        <LinkIcon
          color={"action"}
          fontSize={"small"}
          sx={{ marginInlineEnd: 1 }}
        />
      )}
      {icon === "People" && (
        <PeopleIcon
          color={"action"}
          fontSize={"small"}
          sx={{ marginInlineEnd: 1 }}
        />
      )}
      {icon === "GitHub" && (
        <GitHub
          color={"action"}
          fontSize={"small"}
          sx={{ marginInlineEnd: 1 }}
        />
      )}
      {icon === "Repo" && (
        <TurnedInNotIcon
          color={"action"}
          fontSize={"small"}
          sx={{ marginInlineEnd: 1 }}
        />
      )}
      {icon === "Gist" && (
        <CardMembershipIcon
          color={"action"}
          fontSize={"small"}
          sx={{ marginInlineEnd: 1 }}
        />
      )}
      {icon === "Link" ? (
        <Link className={classes.link} href={link} color={"text.primary"}>
          {link}
        </Link>
      ) : (
        <>
          <Typography color={"text.primary"} fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography
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
