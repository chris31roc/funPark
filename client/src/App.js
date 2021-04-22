import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveParks from "./pages/SaveParks";
import SearchParks from "./pages/SearchParks";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={SearchParks} />
          <Route exact path="/saved" component={SaveParks} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
