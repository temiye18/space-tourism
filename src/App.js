// import data from "./data";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Homepage from "./Pages/HomePage/Homepage";
import Destination from "./Pages/Destination/Destination";
import DestinationDetails from "./Pages/Destination/DestinationDetails";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/destination/"
          element={<Navigate to="/destination/Moon" />}
        />
        <Route path="/destination/*" element={<Destination />}>
          <Route path=":planet" element={<DestinationDetails />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
