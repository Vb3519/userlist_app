import { createSlice } from '@reduxjs/toolkit';

// Types:
import { UsersState, UsersSlice } from 'src/types/users.interface';

// Services:
import loadUsersData from '@app/components/services/loadUsersData';

const initialState: UsersState = {
  users: [],
  isUsersDataLoading: false,
  usersDataLoadError: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loadUsersData.pending, (state) => {
      return { ...state, isUsersDataLoading: true };
    });

    builder.addCase(loadUsersData.fulfilled, (state, action) => {
      state.users.push(...action.payload);
      state.isUsersDataLoading = false;
    });

    builder.addCase(loadUsersData.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.isUsersDataLoading = false;
        state.usersDataLoadError = action.payload;
      }
    });
  },
});

// Состояние:
// --------------------
export const selectUsersData = (state: UsersSlice) => state.users.users;

export const selectIsUsersDataLoading = (state: UsersSlice) =>
  state.users.isUsersDataLoading;

export const selectUsersDataLoadError = (state: UsersSlice) =>
  state.users.usersDataLoadError;

export default usersSlice.reducer;
