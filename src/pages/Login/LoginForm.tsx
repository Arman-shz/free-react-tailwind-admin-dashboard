import { useState } from "react";
import LoginWithPhoneNumTab from "../../components/login/LoginWithPhoneNumTab";
import LoginWithPasswordTab from "../../components/login/LoginWithPasswordTab";

const LoginForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"phone" | "password">("phone");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500">
      <div className="flex w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden bg-white">
        <div className="w-1/2 hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-500 text-white p-10">
          <div className="text-4xl font-bold mb-4">خوش آمدید</div>
          <p className="mb-6">برای دسترسی به امکانات وارد شوید</p>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white">
          <h2 className="flex justify-center items-center text-2xl font-bold text-gray-800 mb-6">ورود</h2>
          <div className="flex mb-6 border-b border-gray-300">
            <button
              className={`flex-1 py-2 font-semibold transition-colors ${
                activeTab === "phone"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              ورود با شماره تماس
            </button>
            <button
              className={`flex-1 py-2 font-semibold transition-colors ${
                activeTab === "password"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("password")}
            >
              ورود با رمز عبور
            </button>
          </div>
          {activeTab === "phone" ? <LoginWithPhoneNumTab /> : <LoginWithPasswordTab />}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;