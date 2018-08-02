import { connect } from 'react-redux';
import { getActualTheme, getDraftTheme, updateDraftTheme } from './theme';

function mapStateToProps(state) {
  return {
    actualTheme: getActualTheme(state),
    draftTheme: getDraftTheme(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDraftTheme: attributes => dispatch(updateDraftTheme(attributes)),
  };
}

const withDynamicTheme = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withDynamicTheme;
