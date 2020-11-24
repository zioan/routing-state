import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./bottomStyle.css";
import HomeDescription from "../pages/pageDescription/HomeDescription";
import ContactDescription from "../pages/pageDescription/ContactDescription";

//Conditionally component render based on route
export default function Bottom() {
  return (
    <div>
      <hr />
      <div className="bottom">
        <div className="bottom-description">
          <h2>Content Description</h2>
          <Switch>
            <Route exact path="/" component={HomeDescription} />
          </Switch>
          <Switch>
            <Route exact path="/contact" component={ContactDescription} />
          </Switch>
        </div>
        <div className="bottom-links">
          <h2>Links</h2>
        </div>
      </div>
    </div>
  );
}
