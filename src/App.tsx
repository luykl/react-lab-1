import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import AdDesigner from '../src/Components/AdDesigner';
import Votes from '../src/Components/Votes';
import Ad from '../src/Components/Ad';

function App() {
  return (
    <div className="App">
      <header><Header user="Bob Loblaw"/></header>
      <div className="adBanner">
        <section><Ad flavor="Strawberry" fontSize={45} darkTheme={false}/></section>
        <section><Ad flavor="Chocolate" fontSize={50} darkTheme={true}/></section>
        <section><Ad flavor="Vanilla" fontSize={65} darkTheme={false}/></section>
      </div>
      <section><AdDesigner/></section>
      <section><Votes/></section>
    </div>
  );
}

export default App;
