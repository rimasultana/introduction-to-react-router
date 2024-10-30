import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1 className="text-3xl text-center">Posts: {posts.length}</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;