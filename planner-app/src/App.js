import React, { Component } from "react";
import { SchicView } from "rucola-core-library";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rucula App </h1>
        <div className="Container">
          <div className="SchicViewContainer">
            <SchicView onSave={value => console.log(value)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
