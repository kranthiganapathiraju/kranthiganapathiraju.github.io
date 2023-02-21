import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About'

// import ReactDOM from "react-dom";
// import {Routes,Route, Link } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Welcome" />
      <div className="container my-3">
        <TextForm/>
      </div>
      <div className="container">
        <About/>
      </div>
      
    </>
  );
}

export default App;
