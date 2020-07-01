import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
    setText("");
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
      <input type="submit" className="btn btn-dark btn-block" value="Search" />
    </form>
  );
};

export default Search;
