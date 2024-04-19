import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<HomeScreen />} />
        <Route path="/auth" element = {<AuthScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
