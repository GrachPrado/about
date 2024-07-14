import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/Header/MainComponent/MainComponent";
import HeaderRoutes from "./components/Header/HeaderRoutes";
import Footer from "./components/Footer/Footer";
import "./scss/reset.module.scss";
function App() {
  return (
    <Router>
      <MainComponent />
     <HeaderRoutes /> 
      <Footer />
    </Router>
  );
}

export default App;
