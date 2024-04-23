import { configureStore } from "@reduxjs/toolkit";
import userNewUserSlice from "./Redux/newUserSlice";

const store = configureStore({
  reducer: {
    allUsers: userNewUserSlice.reducer,
  },
});

export default store;
