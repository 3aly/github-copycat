import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStyles } from "./Routes.styles";
import { Home } from "@screens/index";

const Routers = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/splash" element={<SplashScreen />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routers;
