// import data from "./data";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Homepage from "./Pages/HomePage/Homepage";
import Destination from "./Pages/Destination/Destination";
import DestinationDetails from "./Pages/Destination/DestinationDetails";
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
      </Routes>
    </>
  );
}

export default App;
