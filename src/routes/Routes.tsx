import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStyles } from "./Routes.styles";
import { Home, UserDetails } from "@screens/index";
import { Footer, NavBar } from "@components/organisms";
import Navbar from "@components/organisms/NavBar/NavBar";

const Routers = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routers;
