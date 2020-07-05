import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);
  const {
    name,
    login,
    avatar_url,
    html_url,
    location,
    hireable,
    public_repos,
    public_gists,
    following,
    followers,
  } = props.user;

  if (props.loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Link to="/" className="btn btn-dark">
        Back to Search
      </Link>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: "200px", display: "block", marginTop: "20px" }}
        className="round-img"
      />
      <p>{name}</p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      <p>
        <strong>Public Repos: </strong>
        {public_repos}
      </p>
      <a href={html_url}>Login</a>
    </div>
  );
};

export default User;
