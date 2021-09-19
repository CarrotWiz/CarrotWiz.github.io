import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AboutMe from './pages/AboutMe.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/aboutme' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
