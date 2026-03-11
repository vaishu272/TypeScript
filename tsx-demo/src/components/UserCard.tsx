import { FiUser } from "react-icons/fi";

type UserProps = {
  name: string;
  age: number;
};

const UserCard = ({ name, age }: UserProps) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        User Props Example
      </h2>

      <FiUser className="text-indigo-600 text-5xl mx-auto mb-3" />

      <h3 className="text-xl font-semibold text-gray-700">{name}</h3>

      <p className="text-gray-500">Age: {age}</p>
    </div>
  );
};

export default UserCard;
