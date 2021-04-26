import React from "react";
import axios from "axios";

import "./App.css";
import PhotoContext from "./components/Api/PhotoContext";

function App() {
  return (
    <PhotoContext>
      <div>Test</div>
    </PhotoContext>
  );
}

export default App;
