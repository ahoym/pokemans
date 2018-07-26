import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { typographyColors } from 'src/utils/theming/themeHelpers';

const sharedHeadingStyles = `
  margin: 0;
`;

const h1 = `
  ${sharedHeadingStyles}
  font-size: 3rem;
`;
const h2 = `
  ${sharedHeadingStyles}
  font-size: 2.5rem;
`;
const h3 = `
  ${sharedHeadingStyles}
  font-size: 2rem;
`;
const h4 = `
  ${sharedHeadingStyles}
  font-size: 1.5rem;
`;
const h5 = `
  ${sharedHeadingStyles}
  font-size: 1.25rem;
`;
const h6 = `
  ${sharedHeadingStyles}
  font-size: 1rem;
`;

const headingStyles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

function Heading({ children, color, level, theme, ...rest }) {
  const headerLevel = `h${level}`;
  const Element = styled(headerLevel)(
    headingStyles[headerLevel],
    typographyColors(color, theme)
  );
  return <Element {...rest}>{children}</Element>;
}

export default withTheme(Heading);
