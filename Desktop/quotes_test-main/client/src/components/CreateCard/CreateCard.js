import React from "react";
import "./CreateCard.css";
import axios from "axios";
import { useState } from "react";

export default function CreateCard() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");

  const create = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/quotes",
        {
          content: content,
          author: author,
          tag: [tag],
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="createcard">
      <h3>Post your Quote!</h3>
      <form className="createform">
        <div className="inputi">
          <input
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Quote text"
            required
          ></input>
          <br></br>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          ></input>
          <br></br>
          <input
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="Tag"
            required
          ></input>
          <br></br>
        </div>
        <button onClick={create}>Create Quote</button>
      </form>
    </div>
  );
}
