import React, { useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8002/api/test_auth", {
        withCredentials: true,
        xsrfCookieName: "sessionid",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log(res);
    };

    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
