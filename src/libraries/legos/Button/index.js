import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { typographyColors } from 'src/utils/theming/themeHelpers';
import { Text } from '../index';

const inverseMode = (color, theme, { composed = false } = {}) => {
  const styles = {
    backgroundColor: 'transparent',
    borderColor: theme.colors[color],
    color: theme.colors[color],
  };
  if (!composed) {
    styles[':hover,:focus'] = defaultMode(color, theme, { composed: true });
  }

  return styles;
};

const defaultMode = (color, theme, { composed = false } = {}) => {
  const styles = {
    ...typographyColors('default', theme),
    backgroundColor: theme.colors['primary'],
    borderColor: theme.colors['default'],
  };
  if (!composed) {
    styles[':hover,:focus'] = inverseMode('primary', theme, {
      composed: true,
    });
  }

  return styles;
};

const modeMapping = {
  inverse: inverseMode,
  default: defaultMode,
};

function ButtonUi({ children, className, ...rest }) {
  const content =
    typeof children === 'string' ? <Text>{children}</Text> : children;

  return (
    <button type="button" className={className} {...rest}>
      {content}
    </button>
  );
}

const Button = styled(ButtonUi)(
  {
    border: 'solid 1px',
    borderRadius: '4px',
    padding: '10px 30px',
    transition: '0.5s',
  },
  ({ color, mode = 'default', theme }) => modeMapping[mode](color, theme)
);

export default withTheme(Button);
