import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { getDraftTheme } from './theme';

// Always show draftTheme, for design sandboxing
function DynamicThemeProvider({ children, draftTheme }) {
  return <ThemeProvider theme={draftTheme}>{children}</ThemeProvider>;
}

function mapStateToProps(state) {
  return {
    draftTheme: getDraftTheme(state),
  };
}

const DynamicThemeConnector = connect(mapStateToProps);

export default DynamicThemeConnector(DynamicThemeProvider);
