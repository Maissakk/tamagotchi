import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpeciesSelection from "./pages/Species";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SpeciesSelection />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
