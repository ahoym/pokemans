import React from 'react';
import styled, { keyframes } from 'react-emotion';

// Temporary placeholder until actual styles are added
function SpinnerUi({ className }) {
  return (
    <span>
      <h2 className={className}>Loading...</h2>
    </span>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(SpinnerUi)(
  {
    color: 'blue',
    animation: `${rotate} infinite 20s linear`,
  },
  props => ({
    fontSize: '1rem',
  })
);

export default Spinner;
