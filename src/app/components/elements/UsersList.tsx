// Types:
import { Users_List } from 'src/types/users.interface';

// Ui:
import UserCard from './UserCard';

const UsersList: React.FC<Users_List> = ({ data, ...props }) => {
  return (
    <ul
      className={`grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-5`}
      {...props}
    >
      {data.map((userInfo) => {
        return (
          <UserCard
            key={userInfo.id}
            name={userInfo.name}
            email={userInfo.email}
            city={userInfo.address.city}
          />
        );
      })}
    </ul>
  );
};
export default UsersList;
