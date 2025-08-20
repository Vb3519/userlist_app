// Data:
// ----------------------------------
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

// State:
// ----------------------------------
export interface UsersState {
  users: User[];
  isUsersDataLoading: boolean;
  usersDataLoadError: string;
}

export interface UsersSlice {
  users: UsersState;
}

export interface UsersFilterState {
  userNameFilter: string;
}

export interface UsersFilterSlice {
  usersFilter: UsersFilterState;
}

// Components:
// ----------------------------------
export interface Users_List extends React.HTMLAttributes<HTMLUListElement> {
  data: User[];
}

export interface UserCard_Props extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  email: string;
  city: string;
}

export interface Custom_Input
  extends React.InputHTMLAttributes<HTMLInputElement> {}
