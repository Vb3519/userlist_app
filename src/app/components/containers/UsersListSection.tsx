import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Ui:
import UsersList from '../elements/UsersList';
import CustomInput from '@shared/ui/CustomInput';

// Types:
import { User } from 'src/types/users.interface';
import { AppDispatch } from '@app/redux/store';

// State:
import {
  selectUsersData,
  selectIsUsersDataLoading,
  selectUsersDataLoadError,
} from '@app/redux/slices/usersSlice';

import {
  setUserName,
  selectUserNameFilter,
} from '@app/redux/slices/usersFilterSlice';

// Services:
import loadUsersData from '../services/loadUsersData';

// Api:
import { USERS_URL } from '@shared/api/users_url';

// Utils:
import filterUsersByName from '@shared/utils/filterUsersByName';

const UsersListSection = () => {
  const dispatch: AppDispatch = useDispatch();

  const usersData: User[] = useSelector(selectUsersData);
  const isUsersDataLoading: boolean = useSelector(selectIsUsersDataLoading);
  const usersDataLoadError: string = useSelector(selectUsersDataLoadError);

  const userNameFilter: string = useSelector(selectUserNameFilter);

  // Загрузка данных пользователей:
  // -------------------------------------
  const handleLoadUsersData = (url: string) => {
    dispatch(loadUsersData(url));
  };

  // Фильтр пользователей по имени:
  // -------------------------------------
  const handleSetUserNameFilterVal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setUserName(event.target.value));
  };

  useEffect(() => {
    if (usersData.length === 0 && !isUsersDataLoading) {
      handleLoadUsersData(USERS_URL);
    }
  }, []);

  const filteredUsersData = filterUsersByName(usersData, userNameFilter);

  return (
    <section className="flex flex-col gap-2 xs:px-8 sm:gap-4 lg:px-16 2xl:px-32">
      <h1 className="text-center font-semibold">Карточки пользователей:</h1>

      {isUsersDataLoading ? (
        <h1 className="font-semibold text-center animate-pulse">
          Загружаем данные пользователей
        </h1>
      ) : !usersDataLoadError ? (
        <>
          <CustomInput
            placeholder="Имя пользователя..."
            maxLength={25}
            value={userNameFilter}
            onChange={handleSetUserNameFilterVal}
          />

          <UsersList data={filteredUsersData} />
        </>
      ) : (
        <h1 className="font-semibold text-center">Что-то пошло не так :с</h1>
      )}
    </section>
  );
};

export default UsersListSection;
