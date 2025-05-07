import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Layout from "./layouts/Layout";

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;