const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#8eaad4] to-[#ddb2bc]">
      <div className="mx-2">
        <h1 className="text-2xl font-bold py-2">Post Page</h1>
        <div className="border border-indigo-600 rounded-lg px-2 w-3/4">
          <div className="flex">
            <p className="font-bold text-xl">Title</p>
          </div>
          <div>
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
