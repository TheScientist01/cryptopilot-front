import { createSlice } from "@reduxjs/toolkit";

const USER_INITIAL_STATE = {
  id: null,
  email: "",
  username: "",
  created: "",
  updated: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      for (const key in state) {
        if (key in action.payload) {
          state[key] = action.payload[key];
        }
      }
    },
    resetUser: () => {
      state = USER_INITIAL_STATE;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectId = (state) => state.user.id;
export const selectUsername = (state) => state.user.username;

export default userSlice;
