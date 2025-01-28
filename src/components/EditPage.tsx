import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => navigate("/"));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="block border p-2 my-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="block border p-2 my-2 w-full"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPage;
