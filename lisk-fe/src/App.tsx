import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import NewAccount from './components/New-Account';
import Faucet from './components/Faucet';
import Account from './components/Account';
import Hello from './components/Send-Hello';

export const app = () => {
  return (
    <Router>
      <div>
        <Route>
          <ul>
            <li><Link to="/">Home</Link></li>
            <hr />
            <h3> Interact </h3>
            <li><Link to="/new-account">New Account</Link></li>
            <li><Link to="/faucet">Faucet</Link></li>
            <li><Link to="/send-hello">Send Hello!</Link></li>
            <hr />
            <h3> Explore </h3>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </Route>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new-account">
            <NewAccount />
          </Route>
          <Route path="/faucet">
            <Faucet />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/send-hello">
            <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default app;