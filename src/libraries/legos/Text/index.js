import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { typographyColors } from 'src/utils/theming/themeHelpers';

const sizeMapping = {
  xs: '0.75rem',
  s: '1.0rem',
  m: '1.5rem',
  lg: '1.75rem',
  xl: '2rem',
};

const Text = styled('p')(({ inline, color, size = 'm', theme }) => ({
  display: inline ? 'inline' : 'block',
  fontSize: sizeMapping[size],
  margin: 0,
  ...typographyColors(color, theme),
}));

export default withTheme(Text);
