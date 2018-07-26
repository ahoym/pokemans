import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { Heading, Spacer, Spinner, Text } from 'src/libraries/legos';

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

        <div>
          <Spacer size="xl" />
          <Heading level="1">h1. Showcasing re-usable components</Heading>
          <Spacer size="lg" />

          <div>
            <Spacer size="xl" />
            <Heading color="danger" level="2">
              h2. With theme "danger" color
            </Heading>
            <Spacer size="lg" />

            <Heading color="warning" level="3">
              h3. With theme "warning" color
            </Heading>
            <Spacer size="lg" />

            <Heading color="info" level="4">
              h4. With theme "info" color
            </Heading>
            <Spacer size="lg" />

            <Heading color="success" level="5">
              h5. With theme "success" color
            </Heading>
            <Spacer size="lg" />

            <Heading color="default" level="6">
              h6. With theme "default" color
            </Heading>
            <Spacer size="lg" />
            <Spacer size="xl" />
          </div>

          <div>
            <Spacer size="xl" />
            <Heading level="2">Text Components</Heading>
            <Spacer size="lg" />

            <Text color="danger" size="xl">
              Testing danger text, xl size
            </Text>
            <Spacer size="m" />

            <Text color="warning" size="lg">
              Testing warning text, lg size
            </Text>
            <Spacer size="m" />

            <Text color="info" size="m">
              Testing info text, m size
            </Text>
            <Spacer size="m" />

            <Text color="success" size="s">
              Testing success text, s size
            </Text>
            <Spacer size="m" />

            <Text color="default" size="xs">
              Testing default text, xs size
            </Text>
            <Spacer size="m" />

            <Spacer size="xl" />
          </div>

          <div>
            <Spacer size="xl" />
            <Heading level="2">Spinner</Heading>
            <Spinner />

            <Heading level="2">Spinner with message</Heading>
            <Spinner message="Reticulating Splines..." />

            <Spacer size="xl" />
            <Heading level="2">Spacer, x-direction (inline)</Heading>
            <div>
              <Text inline>Two inline blocks</Text>
              <Spacer size="xl" direction="x" />
              <Text inline>Together!</Text>
            </div>
            <Spacer size="xl" />
          </div>
        </div>
      </div>
    );
  }
}

const colors = {
  danger: 'red',
  default: 'black',
  info: 'cornflowerblue',
  primary: 'cornflowerblue',
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
