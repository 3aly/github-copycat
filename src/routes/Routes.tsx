import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStyles } from "./Routes.styles";
import { Home, UserDetails } from "@screens/index";

const Routers = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/splash" element={<SplashScreen />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routers;
