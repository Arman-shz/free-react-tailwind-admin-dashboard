import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginWithPasswordTab = () => {
  const [nationalCode, setNationalCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    if (!/^\d{10}$/.test(nationalCode)) {
      setError("کد ملی باید ۱۰ رقمی و فقط عدد باشد");
      return;
    }
    if (password.length < 6) {
      setError("رمز عبور باید حداقل ۶ کاراکتر باشد");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ nationalCode, password }));
    navigate("/");
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="کد ملی"
        value={nationalCode}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNationalCode(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm dark:text-red-400">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-lg transition"
      >
        ورود
      </button>
    </div>
  );
};

export default LoginWithPasswordTab;
