import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Button from "./components/layout/Button";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

let githubCleintId;
let githubCleintSecret;

if (process.env !== "production") {
  githubCleintId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubCleintSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubCleintId = process.env.GITHUB_CLIENT_ID;
  githubCleintSecret = process.env.GITHUB_CLIENT_SECRET;
}

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const [user, setUser] = useState({});

  const handleSearch = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubCleintId}&client_secret=${githubCleintSecret}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clickHandler = () => {
    setUsers([]);
  };

  const alertHandler = (msg, type) => {
    setAlertMessage({ msg, type });
    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  const getUser = async (username) => {
    setUser(true);
    const user = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubCleintId}&client_secret=${githubCleintSecret}`
    );
    setUser(false);
    setUser(user.data);
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar icon="fa fa-github" title="Github Finder" />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <Alert alert={alertMessage} />
                  <Search onSearch={handleSearch} setAlert={alertHandler} />
                  {users.length > 0 && (
                    <Button text="Clear" onclick={clickHandler} />
                  )}
                  <Users users={users} loading={loading} />
                </>
              )}
            ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route
              path="/user/:login"
              exact
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  loading={loading}
                  user={user}
                />
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
