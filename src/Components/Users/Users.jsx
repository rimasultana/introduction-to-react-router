import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {
  const Users = useLoaderData();
  return (
    <div className="text-center space-y-3 w-11/12 mx-auto">
      <h1 className="text-5xl font-bold my-14">Our users: {Users.length}</h1>

      <p>Fantastic and beauty users</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            Users.map(user=> <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;
