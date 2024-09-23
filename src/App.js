import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Components/Header';
import HomePage from './Components/Components/Login';


function App() {
  return (
    <div className="app-background min-h-screen bg-cover bg-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
