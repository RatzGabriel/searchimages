import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import PhotoContext from "./components/Api/PhotoContext";
import Item from "./components/Api/Item";

class App extends Component {
  render() {
    return (
      <div>
        <PhotoContext>
          <Item props="test" />
        </PhotoContext>
      </div>
    );
  }
}

export default App;
