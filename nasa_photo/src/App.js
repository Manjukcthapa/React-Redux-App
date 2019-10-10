import React, { Component } from "react";
import "./App.css";
import PhotoList from "./component/PhotoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Photo of the day</h1>
        <PhotoList />
      </div>
    );
  }
}

export default App;
