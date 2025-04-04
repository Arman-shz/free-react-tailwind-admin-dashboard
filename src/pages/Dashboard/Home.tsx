
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  nationalCode: string;
  password?: string;
};

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-2xl font-bold mb-4">خوش آمدید</h1>
      <p className="text-lg text-gray-700">کد ملی شما: {user?.nationalCode}</p>
    </div>
  );
}
 
export default Home;
