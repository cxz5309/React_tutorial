// import MainController from "./controllers/MainController.js";
import "./app.scss";
import React from "react";
import Header from './components/Header.js'
import SearchForm from './components/SearchForm.js'

// document.addEventListener("DOMContentLoaded", () => {
//   new MainController();
// }); 

export default class App extends React.Component{

  search(searchKeyword){
    console.log(searchKeyword);
  }

  render() {
    return (
    <>
      <Header title="검색"/>
      <div className="container">
        <SearchForm onSubmit={(searchKeyword)=>this.search(searchKeyword)}/>
      </div>
    </>
    );
  }
}