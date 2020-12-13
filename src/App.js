import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile/Profile";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
