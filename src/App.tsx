import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import AdDesigner from '../src/Components/AdDesigner';
import Votes from '../src/Components/Votes';

function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <section><AdDesigner/></section>
      <section><Votes/></section>
    </div>
  );
}

export default App;
