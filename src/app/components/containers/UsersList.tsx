// Types:
import { Users_List } from 'src/types/users.interface';

const UsersList: React.FC<Users_List> = ({ ...props }) => {
  return (
    <ul
      className={`grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-5`}
      {...props}
    ></ul>
  );
};
export default UsersList;
