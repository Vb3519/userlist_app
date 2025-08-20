import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utils:
import serverResponseImitation from '@shared/utils/serverResponseImitation';

// Types:
import { User } from 'src/types/users.interface';

// Загрузка данных пользователей:
const loadUsersData = createAsyncThunk(
  'users/loadUsersData',
  async (url: string, thunkApi) => {
    try {
      await serverResponseImitation(2000);

      const usersDataResponse = await axios.get<User[]>(url);

      const usersData: User[] = usersDataResponse.data;

      console.log('Загружены данные пользователей:', usersData);

      return usersData;
    } catch (error: unknown) {
      const errorMsg: string = `Error: ${(error as Error).message}`;
      console.log(errorMsg);

      return thunkApi.rejectWithValue(errorMsg);
    }
  }
);

export default loadUsersData;
