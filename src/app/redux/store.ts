import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '@app/redux/slices/usersSlice';
import usersFilterReducer from '@app/redux/slices/usersFilterSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    usersFilter: usersFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
