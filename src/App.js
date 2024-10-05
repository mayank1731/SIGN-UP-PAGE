
import React, { useState } from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import TermsAndConditions from './components/TermsAndConditions'; 
// import Header from './components/Header'


import Login from './components/Login';

const App = () => {
  const [ isSignedUp, setIsSignedUp] = useState(false);
  return (
    <Router>
      <Routes>
      <Route
     
          path="/"
          element={<Signup setIsSignedUp={setIsSignedUp} />} 
        />
        <Route path="/" element={<Signup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/header" element={<Header />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
