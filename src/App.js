import React from 'react';
import HomeView from './views/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginView from './views/Login';
import SettingsView from './views/Settings';
import RegisterView from './views/Register';
import ChatView from './views/Chat';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>

          <Route path="/chat">
            <ChatView />
          </Route>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
