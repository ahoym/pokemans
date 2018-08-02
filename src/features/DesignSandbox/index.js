import React, { Component } from 'react';
import withDynamicTheme from 'src/modules/theme/withDynamicTheme';
import { Button, Heading } from 'src/libraries/legos';
import { flexContainer } from 'src/libraries/legos/common-styles/layout';

class ColorInput extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  updateColor = () => {
    this.props.updateColor({
      themePath: this.props.themePath,
      value: this.state.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <input onChange={this.handleChange} />
        <Button onClick={this.updateColor}>Save Draft</Button>
      </React.Fragment>
    );
  }
}

function ColorDisplay({ colorsMap, scope, updateColor }) {
  return Object.keys(colorsMap).map(colorKey => (
    <div className={flexContainer} key={colorKey}>
      <Heading level="3">{scope}</Heading>

      <Heading level="5">{colorKey}</Heading>
      <Heading level="5" style={{ color: colorsMap[colorKey] }}>
        {colorsMap[colorKey]}
      </Heading>

      {updateColor && (
        <ColorInput
          themePath={`colors.${colorKey}`}
          updateColor={updateColor}
        />
      )}
    </div>
  ));
}

// TODO: Flesh out layout of this component, it looks really bad right now
function DesignSandbox({ actualTheme, draftTheme, updateDraftTheme }) {
  return (
    <div>
      <Heading level="3">Sandbox</Heading>
      <ColorDisplay colorsMap={actualTheme.colors} scope="actualTheme" />
      <ColorDisplay
        colorsMap={draftTheme.colors}
        scope="draftTheme"
        updateColor={updateDraftTheme}
      />
    </div>
  );
}

export default withDynamicTheme(DesignSandbox);
