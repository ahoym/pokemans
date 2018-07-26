import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { typographyColors } from 'src/utils/theming/themeHelpers';
import { Text } from '../index';

function AlertUi({ className, message }) {
  return (
    <div className={className}>
      <Text color="danger">{message}</Text>
    </div>
  );
}

const Alert = styled(AlertUi)(props =>
  typographyColors(props.color, props.theme)
);

export default withTheme(Alert);
