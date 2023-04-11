import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: [],
    loading: false,
    error: false,
    img:"",
    token:null,
    id:"",
    bio:"",
    email:""
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.img = payload?.user?.image;
      state.token = payload?.key;
      state.id = payload?.user?.id;
      state.bio=payload?.user?.bio
      state.email = payload?.user?.email;
    },
    
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
          state.img = null
           state.token = null;
           state.bio=null;
           state.email=null
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.img = payload?.image;
      state.error = false;
      state.token = payload?.token;
      state.id=payload?.id
      state.bio = payload?.bio;
      state.email = payload?.email;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
