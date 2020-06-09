import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Menu({ item }) {
  console.log(item);
  return (
    <Router>
      <div className="menuItem">
        <Link to={`./${item.page}`}>{item.menu}</Link>
      </div>
    </Router>
  );
}

export default Menu;
