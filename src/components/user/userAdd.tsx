import { useState } from "react";
import { User } from "../common/types";

interface AddUserProps {
  onAdd: (user: User) => void;
  onClose: () => void;
}

const UserAdd: React.FC<AddUserProps> = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !city) return;
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      city,
    };
    onAdd(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 dark:bg-gray-900 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 ml-[-120px] dark:bg-gray-600 ">
        <h3 className="text-xl font-bold mb-4">افزودن کاربر</h3>
        <input
          className="w-full p-2 mb-2 border rounded outline-none"
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded outline-none"
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded outline-none"
          type="text"
          placeholder="شهر"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-500" onClick={handleSubmit}>
            افزودن
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-500" onClick={onClose}>
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
