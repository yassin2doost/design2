import { OPEN_MENU, CLOSE_MENU } from "../constants/actionTypes";

export const openMenu = () => dispatch => {
  dispatch({
    type: OPEN_MENU
  });
};

export const closeMenu = () => dispatch => {
  dispatch({
    type: CLOSE_MENU
  });
};
