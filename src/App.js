import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';




function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        
        <Route exact path="/">
          <HomePage myarg="asdf"></HomePage>
        </Route>

        <Route exact path="/blogpage/:id" children ={<Child/>} />

        <Route exact path="/about">
          <AboutPage myarg="about"></AboutPage>
        </Route>

        <Route exact path="/contact">
          <ContactPage myarg="contact"></ContactPage>
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <BlogPage id={id}/>
  );
}

export default App;
