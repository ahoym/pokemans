import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './utils/configureStore.js';
import reducers from './reducers.js';
import logo from './logo.svg';
import './App.css';

import PokedexContainer from './features/Pokedex/PokedexContainer';

const store = configureStore(reducers);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <PokedexContainer />
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
