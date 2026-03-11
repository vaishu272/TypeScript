import { Link, Outlet } from "react-router-dom";
import { FiHome, FiActivity, FiUser, FiCheckSquare } from "react-icons/fi";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg px-8 py-4 flex justify-center gap-10 rounded-b-2xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-600 transition"
        >
          <FiHome />
          Home
        </Link>

        <Link
          to="/counter"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition"
        >
          <FiActivity />
          Counter
        </Link>

        <Link
          to="/props"
          className="flex items-center gap-2 text-green-600 font-semibold hover:text-blue-600 transition"
        >
          <FiUser />
          Props
        </Link>

        <Link
          to="/todos"
          className="flex items-center gap-2 text-pink-600 font-semibold hover:text-purple-600 transition"
        >
          <FiCheckSquare />
          Todo
        </Link>
      </nav>

      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
