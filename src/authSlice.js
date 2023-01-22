import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const initialState = {
  isSignIn: cookie.get("token") !== undefined,
  isIconUrl: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //ログイン処理
    signIn: (state) => {
      state.isSignIn = true;
    },
    signOut: (state) => {
      state.isSignIn = false;
    },
    //icon画像urlの取得
    updateIcon: (state, url) => {
      state.isIconUrl = url;
    }
  },
});

export const { signIn, signOut, updateIcon } = authSlice.actions;
