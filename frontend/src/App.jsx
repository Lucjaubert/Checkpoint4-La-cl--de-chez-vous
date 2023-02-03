import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRouteAgent from "./context/ProtectedRouteAgent";
import Connexion from "./pages/Connexion/Connexion";
import HomePage from "./pages/HomePage/HomePage";
import DashboardAgent from "./pages/DashboardAgent/DashboardAgent";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/ConnexionAgent" element={<Connexion />} />
        <Route path="/DashboardAgent" element={<DashboardAgent />} />
        <Route path="/Main" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
