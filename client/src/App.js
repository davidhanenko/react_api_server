import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from './components/Characters';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <Header />
        </header>
        <Characters />
      </Router>
    </div>
  );
}

export default App;
