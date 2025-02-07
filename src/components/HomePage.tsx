import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
} // to define the type of the data that we are going to use.

const HomePage = () => {
  // const [posts, setPosts] = useState<Post[]>([]); // useState is using to manage form inputs and local state.
  const navigate = useNavigate(); // useNavigate is using to direct to another page.

  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("http://localhost:3001/posts").then(
        (res) => res.json() as Promise<Post[]>
      ),
  });

  // useEffect(() => {
  //   fetch("http://localhost:3001/posts") // fetch is using to get data from the server.
  //     .then((response) => response.json()) // response.json is using to convert the response to json.
  //     .then((data) => setPosts(data)); // setPosts is using to set the data to the state.
  // }, []); // useEffect is using to fetch data from the server.

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  // const handleDelete = (id: number) => {
  //   fetch(
  //     `http://localhost:3001/posts/${id}`, // fetch is using to get data from the server, base from the id.
  //     {
  //       method: "DELETE", // method is using to define the type of the request.
  //     }
  //   ).then(() => setPosts(posts.filter((post) => post.id !== id))); // setPosts is using to set the data to the state.
  // }; // handleDelete is using to delete the post.

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#8eaad4] to-[#ddb2bc] px-2">
      <div>
        <h1 className="text-2xl font-bold py-2 text-center">Post Page</h1>
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg px-2 py-2 my-2 drop-shadow-md bg-rose-100 w-full md:w-3/5"
          >
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="py-4">{post.content}</p>
            <div className="flex">
              <button
                onClick={() => navigate("/edit/" + post.id)}
                className="px-4 py-2 bg-amber-300 flex items-center rounded right-2 hover:bg-amber-400 "
              >
                Edit <span className="i-mdi-file-edit" />
              </button>
              <button
                className="ml-2 px-4 py-2 bg-red-300 flex items-center rounded right-2 hover:bg-red-400 "
                // onClick={() => handleDelete(post.id)} // example of using handleDelete function.
              >
                Delete <span className="i-mdi-delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/create")} // example of using navigate to direct to another page.
        className="fixed bottom-4 right-4 bg-blue-300 px-4 py-2 flex items-center rounded hover:bg-blue-400 "
      >
        Create Post <span className="i-mdi-add-box" />
      </button>
    </div>
  );
};

export default HomePage;
