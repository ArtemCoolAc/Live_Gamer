import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Styles/MainPage.module.css';
import useFetch from 'react-fetch-hook'; // install for docker
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' // maybe install for docker;
import {MainPage} from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

function Main() {
    return (
        <MainPage />
    )
}

// export default App;
export default Main;
