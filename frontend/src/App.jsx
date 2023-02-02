import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/Main" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
