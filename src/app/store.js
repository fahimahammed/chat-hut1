import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../slice/appSlice';
import userReducer from '../slice/userSlice';

export const store = configurStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
