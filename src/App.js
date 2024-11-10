import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Photos from './Photos';

function App() {
  return (
    <Router>
      <div>
        <h1>Wedding Invitation</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
