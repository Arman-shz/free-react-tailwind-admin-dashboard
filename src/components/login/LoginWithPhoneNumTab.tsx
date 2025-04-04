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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNationalCode(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        ورود
      </button>
    </div>
  );
}

export default LoginWithPhoneNumTab;