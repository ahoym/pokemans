import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './utils/configureStore';
import logo from './logo.svg';
import PokedexContainer from './features/Pokedex/PokedexContainer';
import reducers from './reducers';

const store = configureStore(reducers);

class App extends Component {
  render() {
    // TODO: Add functionality to choose a specific pokedex region
    const nationalPokedexId = 1;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <h1>This is a Pokedex Section</h1>
          <PokedexContainer id={nationalPokedexId} />
        </div>
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
