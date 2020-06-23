import React from 'react';
import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/*<BrowserRouter>
        <Switch>
          <Route exact path="/" components={Home} />
        </Switch>
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
