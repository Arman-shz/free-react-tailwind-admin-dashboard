import { useState } from "react";
import { User } from "../common/types";

interface EditUserProps {
  user: User;
  onEdit: (user: User) => void;
  onClose: () => void;
}

const UserEdit: React.FC<EditUserProps> = ({ user, onEdit, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.city);

  const handleSave = () => {
    const updatedUser: User = { ...user, name, email, city };
    onEdit(updatedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 ml-[300px] bg-opacity-50 dark:bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-gray-600">
        <h3 className="text-xl font-bold mb-4">ویرایش کاربر</h3>
        <input
          className="w-full p-2 mb-2 border rounded outline-none"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded outline-none"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded outline-none"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-500" onClick={handleSave}>
            ذخیره
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-500" onClick={onClose}>
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
