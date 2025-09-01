import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Note: Removed 'Router'
import { Home } from './Pages/Home/Home';
import { Login } from './Pages/Login/Login';
import  {Player}   from './Pages/Player/Player';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;