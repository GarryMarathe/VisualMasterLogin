// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './login/Signin/Signin';
import Signup from './login/Signup/Signup';
import Signout from './login/Signout/Signout';
import Home from './Home'; // Import the Home component
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
