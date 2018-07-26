import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { typographyColors } from 'src/utils/theming/themeHelpers';

const sizeMapping = {
  xs: '0.5rem',
  s: '0.75rem',
  m: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

const Text = styled('p')(({ inline, color, size = 'm', theme }) => ({
  display: inline ? 'inline' : 'block',
  fontSize: sizeMapping[size],
  margin: 0,
  ...typographyColors(color, theme),
}));

export default withTheme(Text);
