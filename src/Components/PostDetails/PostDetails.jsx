import { Link, useLoaderData, useNavigate } from "react-router-dom";
export default function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { id, body, title } = post;
  return (
    <div className="flex flex-col py-5 text-center ">
      <h3>Post id: {id}</h3>
      <h4 className="">{title}</h4>
      <p className="px-1">{body}</p>
      <Link to={`post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button className="btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
