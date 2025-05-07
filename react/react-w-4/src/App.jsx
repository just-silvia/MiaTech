import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Layout from "./layouts/Layout";
import TodoDetail from "./pages/TodoDetail";

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;