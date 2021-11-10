import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import postReducer from "./redux/postSlice";
import eventSlice from "./redux/eventSlice";

const store = configureStore({
  reducer: { user: userReducer, post: postReducer, event: eventSlice },
});

export default store;
