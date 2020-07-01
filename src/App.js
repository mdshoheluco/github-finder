import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_secret}`
      );
      setUsers(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleSearch = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_secret}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Navbar icon="fa fa-github" title="Github Finder" />
      <div className="container">
        <Search onSearch={handleSearch} />
        <Users users={users} loading={loading} />
      </div>
    </React.Fragment>
  );
};

export default App;
