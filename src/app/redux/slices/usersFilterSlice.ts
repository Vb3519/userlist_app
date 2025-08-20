import { createSlice } from '@reduxjs/toolkit';

// Types:
import { UsersFilterSlice, UsersFilterState } from 'src/types/users.interface';

const initialState: UsersFilterState = {
  userNameFilter: '',
};

const usersFilterSlice = createSlice({
  name: 'usersFilter',
  initialState: initialState,
  reducers: {
    setUserName: (state, action) => {
      return { ...state, userNameFilter: action.payload };
    },
  },
});

// Действия:
export const { setUserName } = usersFilterSlice.actions;

// Состояние:
export const selectUserNameFilter = (state: UsersFilterSlice) =>
  state.usersFilter.userNameFilter;

export default usersFilterSlice.reducer;
