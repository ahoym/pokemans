import cloneDeep from 'lodash.clonedeep';
import set from 'lodash.set';
import { createSelector } from 'reselect';

// Can dynamically create a file with node scripts for defaults per distribution
// Can also pull from an API
const colors = {
  danger: 'red',
  default: 'black',
  info: 'cornflowerblue',
  primary: 'cornflowerblue',
  success: 'green',
  warning: 'orange',
};

const initialTheme = {
  colors,
};

const UPDATE_DRAFT_THEME = 'UPDATE_DRAFT_THEME';
const UPDATE_ACTUAL_THEME = 'UPDATE_ACTUAL_THEME';

export const updateDraftTheme = ({ themePath, value }) => ({
  type: UPDATE_DRAFT_THEME,
  payload: { themePath, value },
});

const getTheme = state => state.ui.theme;
export const getActualTheme = createSelector(
  getTheme,
  theme => theme.actualTheme
);
export const getDraftTheme = createSelector(
  getTheme,
  theme => theme.draftTheme
);

const initialState = {
  draftTheme: cloneDeep(initialTheme),
  actualTheme: cloneDeep(initialTheme),
};

function themeReducer(state = initialState, action) {
  const statePath =
    action.type === UPDATE_ACTUAL_THEME ? 'actualTheme' : 'draftTheme';

  switch (action.type) {
    case UPDATE_ACTUAL_THEME:
    case UPDATE_DRAFT_THEME:
      const { themePath, value } = action.payload;
      const newState = cloneDeep(state);
      set(newState, `${statePath}.${themePath}`, value);
      return newState;
    default:
      return state;
  }
}

export default themeReducer;
