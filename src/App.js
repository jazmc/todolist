import React, { useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import TabLinks from "./components/TabLinks";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <TabLinks />
    </div>
  );
}

export default App;
