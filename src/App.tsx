import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Tips from './pages/Tips';
import Challenges from './pages/Challenges';
import Impact from './pages/Impact';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;