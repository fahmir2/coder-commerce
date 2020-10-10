import React from 'react';

import './App.css';
import Img from "./components/img";
import Title from "./components/Title";
import ReactLkink from "./components/ReactLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title />
        <ReactLkink />
       </header>
    </div>
  );
}

export default App;
