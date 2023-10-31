import React from "react";
import LoginCard from "./components/LoginCard/LoginCard";
import Login from "./pages/Login/Login";
import "./App.css";
import Footer from "./components/Footer/Footer";
import CreateCard from "./components/CreateCard/CreateCard";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { ContextProvider } from "./context/AppContext";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}