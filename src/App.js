import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/browse';
import Start from './pages/start';
import Login from './pages/login';
import SignUp from './pages/signUp';

import './App.css';
import { GeneralProvider } from './context/LoginContext';

function App() {
  return (
    <GeneralProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start/>}/>
          <Route path="/browse" element={<Browse/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </GeneralProvider>
  );
}

export default App;
