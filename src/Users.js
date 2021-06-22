import classes from "./Users.module.css";
import { useSelector } from "react-redux";

const Users = () => {
  const userList = useSelector((state) => state.userList);
  console.log(userList);
  return (
    <ul className={classes.users}>
      {userList.map((user) => (
        <li key={user.key}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default Users;
