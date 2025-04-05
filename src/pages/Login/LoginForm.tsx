import { useState } from "react";
import LoginWithPhoneNumTab from "../../components/login/LoginWithPhoneNumTab";
import LoginWithPasswordTab from "../../components/login/LoginWithPasswordTab";

const LoginForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"phone" | "password">("phone");

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl">
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          className={`flex-1 py-2 text-center font-semibold transition-colors ${
            activeTab === "phone"
              ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("phone")}
        >
          ورود با شماره تماس
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold transition-colors ${
            activeTab === "password"
              ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("password")}
        >
          ورود با رمز عبور
        </button>
      </div>
      {activeTab === "phone" ? <LoginWithPhoneNumTab /> : <LoginWithPasswordTab />}
    </div>
  );
};

export default LoginForm;
