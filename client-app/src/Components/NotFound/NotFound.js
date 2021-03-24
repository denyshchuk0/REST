import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
              >
                <h2>Page not found!</h2>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
