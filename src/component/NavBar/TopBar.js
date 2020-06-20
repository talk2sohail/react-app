import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function TopBar() {
  return (
    <Router>
      <Fragment>
        <div className="topBarWrapper">
          <div className="sectionWrapper">
            <div className="row no-gutters justify-content-center align-items-center">
              <div className="col-4 mr-auto d-none d-lg-block text-left">
                <div className="topBarMenu">
                  <div className="menuItem">
                    <Link to="./profile">mail@mdds.com</Link>
                  </div>
                  <div className="menuItem">
                    <Link to="./profile">7980538443</Link>
                  </div>
                </div>
              </div>
              <h2 className="text-uppercase" id="changingword">
                Get your phone picked up from your home for repair
              </h2>
              <div className="col-4 ml-auto d-none d-lg-block text-right">
                <div className="topBarMenu">
                  <div className="menuItem">
                    <Link to="./collaborate">Collaborate</Link>
                  </div>
                  <div className="menuItem">
                    <Link to="./blog">Blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default TopBar;
