import React, { useState } from "react";
import Button from "../layout/Button";

const Search = ({ onSearch, setAlert }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      onSearch(text);
      setText("");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Users..."
        name="text"
        value={text}
        onChange={onChange}
      />
      <Button text="Search" type="dark" />
    </form>
  );
};

export default Search;
