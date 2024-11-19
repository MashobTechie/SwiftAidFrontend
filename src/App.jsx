/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import ErrorPage404 from './pages/ErrorPage404';
import ServerError500 from './pages/ServerError500';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/404" element={<ErrorPage404 />} />
        <Route path="/500" element={<ServerError500 />} />
        {/* Catch-All Route */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
  );
}

export default App;
