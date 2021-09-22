import MainController from "./controllers/MainController.js";
import "./app.scss";
import React from "react";
import Header from './components/Header.js'

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});

export default class App extends React.Component{
  render() {
    return <Header title="검색"/>;
  }
}