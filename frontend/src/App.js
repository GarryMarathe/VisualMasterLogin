import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Home from "./Home";  // Import the Home component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
