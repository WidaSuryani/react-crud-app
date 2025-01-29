import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    }).then(() => setPosts(posts.filter((post) => post.id !== id)));
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#8eaad4] to-[#ddb2bc] px-2">
      <div>
        <h1 className="text-2xl font-bold py-2 text-center block">Post Page</h1>
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-white rounded-lg px-2 py-2 my-2 shadow-xl"
          >
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex py-2">
              <button className="px-4 py-2 bg-amber-200 flex items-center rounded hover:bg-amber-300 ">
                Edit <span className="i-mdi-file-edit" />
              </button>
              <button
                className="ml-2 px-4 py-2 bg-red-200 flex items-center rounded hover:bg-red-400 "
                onClick={() => handleDelete(post.id)}
              >
                Delete <span className="i-mdi-delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="fixed bottom-4 right-4 bg-blue-200 px-4 py-2 flex items-center rounded hover:bg-blue-400 ">
        Create Post <span className="i-mdi-add-box" />
      </button>
    </div>
  );
};

export default HomePage;
