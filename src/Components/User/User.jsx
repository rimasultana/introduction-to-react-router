import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const {id, name, email, phone } = user;
  return (
    <div className="p-4 border border-red-300 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Phone: {phone}</p>
     <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
