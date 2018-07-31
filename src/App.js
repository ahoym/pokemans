import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DynamicThemeProvider from './modules/theme/DynamicThemeProvider';

import { Heading, Spacer } from 'src/libraries/legos';

import './App.css';
import configureStore from './utils/configureStore';
import logo from './logo.svg';
import DesignSandbox from './features/DesignSandbox';
import PokedexContainer from './features/Pokedex/PokedexContainer';
import Showcase from './features/LegosShowcase/Showcase';
import reducers from './reducers';

const store = configureStore(reducers);

class App extends Component {
  state = {
    hasUiError: false,
  };

  componentDidCatch() {
    this.setState({ hasUiError: true });
  }

  render() {
    if (this.state.hasUiError) return <p>asdfasdfasdfasdf</p>;

    // TODO: Add functionality to choose a specific pokedex region
    const nationalPokedexId = 1;

    return (
      <div className="App">
        <header className="App-header">
          <Spacer size="lg" />
          <img src={logo} className="App-logo" alt="logo" />
          <Heading level="1">Welcome to React</Heading>
          <Spacer size="lg" />
        </header>

        <div>
          <Spacer size="xl" />
          <Heading level="1">This is a Pokedex Section</Heading>
          <Spacer size="m" />
          <PokedexContainer id={nationalPokedexId} />
        </div>

        <Showcase />

        <DesignSandbox />
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <DynamicThemeProvider>
      <App />
    </DynamicThemeProvider>
  </Provider>
);
