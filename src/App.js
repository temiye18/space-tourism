import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import SideNav from "./components/Header/SideNav";
import Homepage from "./Pages/HomePage/Homepage";
import Destination from "./Pages/Destination/Destination";

import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
function App() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  const openSideNav = () => {
    setSideNavIsOpen(true);
  };

  const closeSideNav = () => {
    setSideNavIsOpen(false);
  };

  const delaySideNavClose = () => {
    const time = setTimeout(() => {
      closeSideNav();
    }, 400);

    return () => clearTimeout(time);
  };
  return (
    <>
      <Navigation openSideNav={openSideNav} />
      <SideNav
        sideNavIsOpen={sideNavIsOpen}
        closeSideNav={closeSideNav}
        delayClose={delaySideNavClose}
      />
      <Switch>
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/crew">
          <Crew />
        </Route>
        <Route path="/technology">
          <Technology />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
