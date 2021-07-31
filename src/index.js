import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./index.css";
import "./reset.css";
import App from "./app";
import Youtube from "./service/youtube";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
