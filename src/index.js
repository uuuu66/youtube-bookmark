import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./reset.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube(
  process.env.REACT_APP_YOUTUBE_API_KEY,
  process.env.REACT_APP_YOUTUBE_API_URL
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
