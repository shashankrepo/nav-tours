import React from 'react';
import Header from './components/header/Header';
import Test from './Test';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/test' component={Test} />
        <Route path='/' component={Header} />
      </Switch>
    </div>
  );
}

export default App;
