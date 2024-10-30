import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { title, id } = post;
  return (
    <div className="flex flex-col gap-4 border-2 border-red-300 py-5 px-5 rounded-3xl mt-5 shadow-white">
      <h4 className="text-xl">Post of id: {id}</h4>
      <h3 className="text-2xl">{title}</h3>
    
    <Link className="text-purple-600 text-center btn" to={`/post/${id}`}>Post Details</Link>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
