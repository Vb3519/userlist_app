// Types:
import { User } from 'src/types/users.interface';

const filterUsersByName = (data: User[], filterValue: string): User[] => {
  return data.filter((userInfo) => {
    const matchesUserName: boolean = userInfo.name
      .toLowerCase()
      .includes(filterValue.toLowerCase().trim());

    return matchesUserName;
  });
};

export default filterUsersByName;
