import React from 'react';
import HomeView from './views/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/settings">
            <h1>Setting</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/register">
            <h1>Register</h1>
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
