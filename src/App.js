import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterURL from "./Component/User/RouterURL"

function App() {
  return (
    <Router>
      <RouterURL />
    </Router>
  );
}

export default App;
