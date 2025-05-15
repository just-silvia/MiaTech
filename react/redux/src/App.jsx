import React from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetail from "./pages/TodoDetail";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;