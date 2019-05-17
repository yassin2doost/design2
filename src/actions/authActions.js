import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { GET_ERRORS } from "../constants/actionTypes";
import setAuthToken from "../utils/AuthTokenResponsible";
import setCurrentUser from "../utils/setCurrentUser";

const API_URL = "/api/users/";

// Registration of new user
export const registerUser = (newUser, history) => async dispatch => {
  await axios
    .post(`${API_URL}/register`, newUser)
    .then(() => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login process with token(JWT)
export const loginUser = userData => async dispatch => {
  await axios
    .post(`${API_URL}/login`, userData)
    .then(res => {
      const { token } = res.data;
      // localStorage.setItem("jwtToken", token);
      deviceStorage.saveKey("id_token", response.data.jwt);
      // Set token to auth header
      setAuthToken(token);
      // Decode token
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Log out
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  // Set Current user to empty object
  dispatch(setCurrentUser({}));
};
