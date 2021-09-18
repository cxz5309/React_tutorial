import MainController from "./controllers/MainController.js";
import "./app.scss";
import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});

export default class App extends React.Component{
  render() {
    return <>todo</>;
  }
}