import React, { useContext, useState } from "react";
import "./LoginCard.css";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const { setToken, accessToken, token } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigate();
  const loginsystem = async () => {
    try {
      const user = await axios.post("http://localhost:8000/sessions", {
        password: password,
        username: username,
      });
      const userData = await user.data;
      localStorage.setItem("token", userData.accessToken);
      setToken(userData.accessToken);
      // navigation("/quotes");
      console.log(token);
      console.log(localStorage.getItem("token"));
    } catch (error) {
      localStorage.clear();
      setToken(null);
      console.log(error.message);
      setUsername("");
      setPassword("");
    }
  };

  const refresh = (e) => {
    e.preventDefault();
    loginsystem(username, password);
  };
  return (
    <div className="card">
      <h1 className="naslov">
        Welcome to the world of <p className="quotes">Quotes</p>
      </h1>
      <form>
        <div className="imeiprezime">
          <label htmlFor="ime">Username:</label>
          <br></br>
          <input
            type="text"
            id="ime"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Pera Peric"
            required
          ></input>
        </div>
        <div className="sifra">
          <label htmlFor="pass">Sifra:</label>
          <br></br>
          <input
            type="password"
            id="pass"
            placeholder="*******"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
