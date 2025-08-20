// Ui:
import UsersList from './components/containers/UsersList';
import UserCard from './components/elements/UserCard';

const App = () => {
  return (
    <div className="p-2 flex flex-col gap-2 xs:px-8 sm:gap-4 lg:px-16 2xl:px-32">
      <h1 className="text-center font-semibold">Карточки пользователей:</h1>

      <UsersList>
        <UserCard
          name={'Viktor'}
          email={'vb3519@bk.ru'}
          city={'St. Petersburg'}
        />
      </UsersList>
    </div>
  );
};

export default App;
