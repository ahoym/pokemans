import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const typography = {
  danger: 'red',
  default: 'black',
  info: 'blue',
  success: 'green',
  warning: 'orange',
};

const HeadingOne = `
  font-size: 3rem;
`;
const HeadingTwo = `
  font-size: 2.5rem;
`;
const HeadingThree = `
  font-size: 2rem;
`;
const HeadingFour = `
  font-size: 1.5rem;
`;
const HeadingFive = `
  font-size: 1.25rem;
`;
const HeadingSix = `
  font-size: 1rem;
`;

const HeadingsMap = {
  1: HeadingOne,
  2: HeadingTwo,
  3: HeadingThree,
  4: HeadingFour,
  5: HeadingFive,
  6: HeadingSix,
};

const typographyColors = (color, theme) => ({
  color: theme.colors[color],
});

// function Heading({ children, level, ...rest }) {
//   const Element = HeadingsMap[level];
//   return <Element {...rest}>{children}</Element>;
// }
function Heading({ children, color, level, theme, ...rest }) {
  const Element = styled(`h${level}`)(
    HeadingsMap[level],
    typographyColors(color, theme)
  );
  return <Element {...rest}>{children}</Element>;
}

export default withTheme(Heading);
