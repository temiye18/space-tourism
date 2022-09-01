// import data from "./data";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Homepage from "./Pages/HomePage/Homepage";
import Destination from "./Pages/Destination/Destination";

import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
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
          <Technology />
        </Route>
      </Switch>
    </>
  );
}

export default App;
