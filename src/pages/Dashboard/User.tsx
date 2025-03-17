import { useEffect, useState } from "react";
import { User } from "../../components/common/types";
import UserAdd from "../../components/user/userAdd";
import UserEdit from "../../components/user/userEdit";

const initialUsers: User[] = [
  { id: 1, name: "علیرضا محمدی", email: "ali@example.com", city: "تهران" },
  { id: 2, name: "سارا احمدی", email: "sara@example.com", city: "مشهد" },
  { id: 3, name: "محمد کریمی", email: "mohammad@example.com", city: "اصفهان" },
  { id: 4, name: "نیلوفر جعفری", email: "niloofar@example.com", city: "تبریز" },
  { id: 5, name: "رضا شریتی", email: "reza@example.com", city: "شیراز" },
  { id: 6, name: "حامد غلامی", email: "hamed@example.com", city: "یزد" },
];

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : initialUsers;
  });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = (user: User) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEditUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsEditOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 w-[1200px] mr-[185px] min-h-screen dark:bg-gray-900 dark:border-gray-800 text-gray-900">
      <h2 className="text-2xl border-b-[2px] p-4 mb-8 border-lightgray-800 dark:border-gray-800  dark:text-gray-400 flex justify-center items-center">لیست کاربران</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-gray-800 transition-all duration-500"
        onClick={() => setIsAddOpen(true)}
      >
        ➕ افزودن کاربر
      </button>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-500 dark:border-gray-800 text-gray-900">
            <p>
              <strong>نام:</strong> {user.name}
            </p>
            <p>
              <strong>ایمیل:</strong> {user.email}
            </p>
            <p>
              <strong>شهر:</strong> {user.city}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition-all duration-500"
                onClick={() => {
                  setSelectedUser(user);
                  setIsEditOpen(true);
                }}
              >
                ✏️ ویرایش
              </button>
              <button
                className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition-all duration-500"
                onClick={() => handleDeleteUser(user.id)}
              >
                ❌ حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAddOpen && <UserAdd onAdd={handleAddUser} onClose={() => setIsAddOpen(false)} />}
      {isEditOpen && selectedUser && (
        <UserEdit user={selectedUser} onEdit={handleEditUser} onClose={() => setIsEditOpen(false)} />
      )}
    </div>
  );
};

export default UserList;
