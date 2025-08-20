// Types:
import { UserCard_Props } from 'src/types/users.interface';

const UserCard: React.FC<UserCard_Props> = ({
  name,
  email,
  city,
  ...props
}) => {
  return (
    <li
      className="w-full p-2 flex flex-col gap-1 flex-1 bg-gray-200 rounded-md text-sm sm:text-base sm:p-4"
      {...props}
    >
      <h3 className="pb-1 border-b-2 border-b-gray-300 font-semibold">
        {name}
      </h3>
      <p>Эл. почта: {email}</p>
      <p>Город: {city}</p>
    </li>
  );
};

export default UserCard;
