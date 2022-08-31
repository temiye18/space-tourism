// import data from "./data";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Homepage from "./Pages/HomePage/Homepage";
import Destination from "./Pages/Destination/Destination";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/destination/*" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
