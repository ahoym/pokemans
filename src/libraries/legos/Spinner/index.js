import React from 'react';
import styled from 'react-emotion';
import { Spacer, Text } from '../index.js';
import { generatePulsingAnimation } from '../common-styles/animations.js';

const generatePulserStyles = ({ endScale, color = 'blue', ...rest }) => {
  return {
    animation: `1s ${generatePulsingAnimation({ endScale })} 0s infinite`,
    backgroundColor: color,
    border: `solid 1px ${color}`,
    borderRadius: '50%',
    height: '3rem',
    position: 'absolute',
    width: '3rem',
    ...rest,
  };
};

const spinnerWrapperStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '5rem',
  justifyContent: 'center',
  margin: '0 auto',
  position: 'relative',
  width: '5rem',
};

const Pulser = styled('div')(generatePulserStyles({ endScale: '0.5' }));
const PulserTwo = styled('div')(generatePulserStyles({ endScale: '1.0' }));
const PulserThree = styled('div')(generatePulserStyles({ endScale: '1.6' }));

function SpinnerWrapper({ className: wrapperClasses, message }) {
  return (
    <div>
      <div className={wrapperClasses}>
        <PulserThree />
        <PulserTwo />
        <Pulser />
      </div>

      {message && (
        <React.Fragment>
          <Spacer size="s" />
          <Text>{message}</Text>
        </React.Fragment>
      )}
    </div>
  );
}

const Spinner = styled(SpinnerWrapper)(spinnerWrapperStyles);

export default Spinner;
