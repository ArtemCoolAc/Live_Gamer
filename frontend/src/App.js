import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Styles/MainPage.module.css';
import useFetch from 'react-fetch-hook';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

function MainPage() {
    return (
        // <div>{styles.sheet}</div>
        <div className={styles.sheet}>
            <div className={styles.panel}></div>
        </div>
    )
}

// export default App;
export default MainPage;
