import React from "react";
import TopBar from "./component/navbar/TopBar";
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/Banner.js";
import Help from "./component/help/Help";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="site-wrapper">
        <TopBar />
        <NavBar />
        <Banner />
        <Help />
      </div>
    </Router>
  );
}

export default App;
