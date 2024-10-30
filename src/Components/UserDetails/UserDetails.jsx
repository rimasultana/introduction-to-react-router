import { useLoaderData } from "react-router-dom";

export default function UserDetails() {
  const user = useLoaderData();
  const { name, website, email } = user;
  return (
      <div className="flex flex-col py-5 text-center ">
        <h1 className="text-3xl">{name}</h1>
        <p className="text-xl">{email}</p>
        <p className="underline text-purple-600">visit us {website}</p>
      </div>
  );
}
