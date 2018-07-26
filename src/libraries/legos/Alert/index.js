import React from 'react';
import styled from 'react-emotion';

// Temporary placeholder until actual styles are added
function AlertUi({ message }) {
  return <h2>{message}</h2>;
}

const Alert = styled(AlertUi)({
  color: 'red',
});

export default Alert;
