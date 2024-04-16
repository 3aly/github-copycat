import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStyles } from "./Routes.styles";
import { Home, UserDetails } from "@screens/index";
import { NavBar } from "@components/organisms";

const Routers = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routers;
