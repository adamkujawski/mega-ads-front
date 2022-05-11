import React from 'react';
import logo from './logo.svg';
import {Test2, TestInterface} from 'types'
import './App.css';

function App() {

  const obj: TestInterface = {
    x: '123',
  }

  const obj2 : Test2 = {
    z: 24,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
