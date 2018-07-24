import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import Spinner from 'src/libraries/components/Spinner';
import Heading from 'src/libraries/components/Heading';

import './App.css';
import configureStore from './utils/configureStore';
import logo from './logo.svg';
import PokedexContainer from './features/Pokedex/PokedexContainer';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Heading color="success" level="1">
          Testing
        </Heading>
        <Heading level="2">Testing2</Heading>
        <Heading level="3">Testing3</Heading>
        <Heading level="4">Testing4</Heading>
        <Heading level="5">Testing5</Heading>
        <Heading level="6">Testing6</Heading>
        <Spinner />

        <div>
          <h1>This is a Pokedex Section</h1>
          {/* <PokedexContainer id={nationalPokedexId} /> */}
        </div>
      </div>
    );
  }
}

const colors = {
  danger: 'red',
  default: 'black',
  info: 'blue',
  success: 'green',
  warning: 'orange',
};

const theme = {
  colors,
};

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
