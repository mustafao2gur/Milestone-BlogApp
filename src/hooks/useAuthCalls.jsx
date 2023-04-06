import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router";


const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://32151.fullstack.clarusway.com/";
//!-----------------------LOGİN----------------------------
  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo

      );
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
      console.log(error);
    }
  };
  //!---------------------------REGISTER-----------------------------------
  const register = async (userInfo) => {
        dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };
  //!------------------------LOGOUT------------------------------------
    const logout = async () => {
      dispatch(fetchStart());
      try {
        await axios.post(`${BASE_URL}users/auth/logout/`);
        dispatch(logoutSuccess());
        toastSuccessNotify("Logout performed");
        navigate(-1);
      } catch (err) {
        dispatch(fetchFail());
        toastErrorNotify("Logout can not be performed");
      }
    };

  return { login, register, logout };
};

export default useAuthCalls;




// import axios from "axios";

// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
// import {
//   fetchFail,
//   loginSuccess,
//   registerSuccess,
// } from "../features/authSlice";
// import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";

// const useAuthCalls = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const BASE_URL = "https://32271.fullstack.clarusway.com/";

//   const login = async (userInfo) => {
//     try {
//       const { data } = await axios.post(
//         `${BASE_URL}users/auth/login/`,
//         userInfo
//       );
//       dispatch(loginSuccess(data));
//       toastSuccessNotify("Login performed");
//       navigate("/");
//     } catch (error) {
//       dispatch(fetchFail());
//       toastErrorNotify("Login can not be performed");
//       console.log(error);
//     }
//   };

//   const register = async (userInfo) => {
//     try {
//       const { data } = axios.post(`${BASE_URL}users/register/`, userInfo);
//       dispatch(registerSuccess(data));
//       toastSuccessNotify("Register performed");
//       navigate("/");
//     } catch (error) {
//       dispatch(fetchFail());
//       console.log(error);
//       toastErrorNotify("Register can not be performed");
//     }
//   };

//   return { login, register };
// };

// export default useAuthCalls;