import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => navigate("/"));
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-[#ddb2bc] to-[#8eaad4] px-2">
      <h1 className="text-2xl font-bold">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label className="block my-2">Title</label>
        <input
          className="block w-3/5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block my-2">Content</label>
        <textarea
          className="block w-3/5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
