import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Textentry from "components/textentry";

function App() {
  return (
    <div className="App">
      <Textentry />
    </div>
  );
}

export default App;
