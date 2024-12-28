import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ManageAccount from './components/ManageAccount';
import './App.css'

const App = () => {
  return (
   
    <Router>
      <div className="container ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ManageAccount />} />
        </Routes>
      </div>
    </Router>
  
  );
};

export default App;
