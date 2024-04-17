import { loader } from "@assets/animations";
import Lottie from "lottie-react";
import React from "react";
import { useStyles } from "./Loader.styles";

const Loader = ({ isLoading = true }: { isLoading?: boolean }) => {
  const { classes } = useStyles();

  if (!isLoading) return null;

  return (
    <div className={classes.container}>
      <Lottie loop animationData={loader} style={{ width: 150, height: 150 }} />
    </div>
  );
};

export default Loader;
