import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import ContactMe from './pages/ContactMe.js';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
