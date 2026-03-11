import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl p-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Counter Demo</h2>

      <p className="text-7xl font-bold text-gray-700 mb-8">{count}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl cursor-pointer"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl cursor-pointer"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
