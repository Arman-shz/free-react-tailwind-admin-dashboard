import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginWithPhoneNumTab = () => {
  const [nationalCode, setNationalCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    if (!/^\d{10}$/.test(nationalCode)) {
      setError("کد ملی باید ۱۰ رقمی و فقط عدد باشد");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ nationalCode }));
    navigate("/");
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="کد ملی"
        value={nationalCode}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNationalCode(e.target.value)
        }
        className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all shadow-md"
      >
        ادامه
      </button>
    </div>
  );
};

export default LoginWithPhoneNumTab;