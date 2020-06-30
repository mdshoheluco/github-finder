import React, { Component } from "react";
import PropTypes from "prop-types";

class UserItem extends Component {
  static defaultProps = {
    buttonText: "More",
  };

  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  };

  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            {this.props.buttonText}
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
