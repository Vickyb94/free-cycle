import React from 'react';
import './index.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SinglePost from "./pages/SinglePost";


import { Route, Routes } from 'react-router';

const App = () => {
  return (
  <>
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/singlepost" element={<SinglePost />}/>
   </Routes>
  </>
  );
}

export default App
