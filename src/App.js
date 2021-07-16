import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Global/Components/Footer/Footer";
import MainNavigation from "./Global/Components/Header/MainNavigation";
import Business from "./Pages/Business";
import Landing from "./Pages/Landing";
import Policies from "./Pages/Policies";
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";

function App() {
  return (
    <Router>
      <main className="main">
        <MainNavigation />
        <Switch>
          <div id="content-wrap">
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/student" exact>
              <Student />
            </Route>
            <Route path="/teacher" exact>
              <Teacher />
            </Route>
            <Route path="/business" exact>
              <Business />
            </Route>
            <Route path="/policies" exact>
              <Policies />
            </Route>
          </div>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
