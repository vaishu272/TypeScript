const Home = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">
        React + TypeScript Demo
      </h1>

      <p className="text-gray-600 mb-6">
        This project demonstrates how React integrates with TypeScript to build
        scalable and type-safe applications.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-purple-100 p-6 rounded-xl">
          <h3 className="font-semibold text-purple-700">Type Safety</h3>
          <p className="text-sm text-gray-600">Detect errors before runtime.</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl">
          <h3 className="font-semibold text-blue-700">Better Autocomplete</h3>
          <p className="text-sm text-gray-600">Improve developer experience.</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <h3 className="font-semibold text-green-700">Clean Architecture</h3>
          <p className="text-sm text-gray-600">
            Structured React applications.
          </p>
        </div>

        <div className="bg-pink-100 p-6 rounded-xl">
          <h3 className="font-semibold text-pink-700">Scalable Code</h3>
          <p className="text-sm text-gray-600">Perfect for large projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
