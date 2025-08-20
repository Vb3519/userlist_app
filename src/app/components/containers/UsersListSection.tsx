import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Ui:
import UsersList from '../elements/UsersList';

// Types:
import { User } from 'src/types/users.interface';
import { AppDispatch } from '@app/redux/store';

// State:
import {
  selectUsersData,
  selectIsUsersDataLoading,
  selectUsersDataLoadError,
} from '@app/redux/slices/usersSlice';

// Services:
import loadUsersData from '../services/loadUsersData';

// Api:
import { USERS_URL } from '@shared/api/users_url';

const UsersListSection = () => {
  const dispatch: AppDispatch = useDispatch();

  const usersData: User[] = useSelector(selectUsersData);
  const isUsersDataLoading: boolean = useSelector(selectIsUsersDataLoading);
  const usersDataLoadError: string = useSelector(selectUsersDataLoadError);

  const handleLoadUsersData = (url: string) => {
    dispatch(loadUsersData(url));
  };

  useEffect(() => {
    if (usersData.length === 0 && !isUsersDataLoading) {
      handleLoadUsersData(USERS_URL);
    }
  }, []);

  return (
    <section className="flex flex-col gap-2 xs:px-8 sm:gap-4 lg:px-16 2xl:px-32">
      <h1 className="text-center font-semibold">Карточки пользователей:</h1>

      {isUsersDataLoading ? (
        <h1 className="font-semibold text-center animate-pulse">
          Загружаем данные пользователей
        </h1>
      ) : !usersDataLoadError ? (
        <UsersList data={usersData} />
      ) : (
        <h1 className="font-semibold text-center">Что-то пошло не так :с</h1>
      )}
    </section>
  );
};

export default UsersListSection;
