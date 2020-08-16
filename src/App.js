import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './TopBar';
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase"
import { useEffect } from "react";


function App() {
  const [{ user }, dispatch] = useStateValue();

  // peice of code which runs based on the given conditins

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
        // user is  logged in


      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        });
        // user is logged out
      }
    });
    return () => {
      // clean up process is going here
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <TopBar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <TopBar />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>




  );
}

export default App;
