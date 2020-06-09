import React from "react";
import "./App.css";
import TopBar from "./component/navbar/TopBar";
import NavBar from "./component/navbar/NavBar";

function App() {
  return (
    <div className="App" id="site-wrapper">
      <TopBar />
      <NavBar />
    </div>
  );
}

export default App;
