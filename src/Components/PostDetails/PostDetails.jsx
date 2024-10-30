import { Link, useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  const { id, body, title } = post;
  return (
    <div className="flex flex-col py-5 text-center ">
      <h3>Post id: {id}</h3>
      <h4 className="">{title}</h4>
      <p className="px-1">{body}</p>
      <Link to={`post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
}
