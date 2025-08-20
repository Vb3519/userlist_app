// Types:
import { Custom_Input } from 'src/types/users.interface';

const CustomInput: React.FC<Custom_Input> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="p-2 outline-none bg-gray-100 rounded-md xs:w-1/2"
    ></input>
  );
};

export default CustomInput;
