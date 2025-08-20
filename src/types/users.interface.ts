// Data:
interface User_Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;

  address: User_Adress;
}

// Components:
export interface Users_List extends React.HTMLAttributes<HTMLUListElement> {}

export interface UserCard_Props extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  email: string;
  city: string;
}
