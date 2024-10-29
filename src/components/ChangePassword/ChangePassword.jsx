// import { useState , useEffect } from './react'
import { useState, useEffect } from "react";
import axios from "axios";
import { _apiurluser } from "../../ApiUrl";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";

function ChangePassword() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [opassword, setOldPassword] = useState();
  const [nPassword, setNewPassword] = useState();
  const [cnewpassword, setConfirmnNewPassword] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    axios
      .get(
        _apiurluser +
          "fetch?email=" +
          localStorage.getItem("email") +
          "&password=" +
          opassword
      )
      .then((response) => {
        if (nPassword == cnewpassword) {
          let updateDetails = {
            condition_obj: { email: localStorage.getItem("email") },
            content_obj: { password: cnewpassword },
          };
          axios
            .patch(_apiurluser + "update", updateDetails)
            .then((response) => {
              setOutput("Password changed successfully");
              setOldPassword("");
              setNewPassword("");
              setConfirmnNewPassword("");
            });
        } else {
          setOutput("New & Confirm New Password Not Match");
          setNewPassword("");
          setConfirmnNewPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
        setOutput("Invalid OldPassword");
      });
  };
  const renderPasswordField = (name, label) => (
    <div className="">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <input
          //   type="password"
          name={name}
          id={name}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="••••••••"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <Eye className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </div>
  );

  return (
    <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Your Password
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              {/* {renderPasswordField("oldPassword", "Old Password")}
            {renderPasswordField("newPassword", "New Password")}
            {renderPasswordField("confirmPassword", "Confirm New Password")} */}
              {/* old password */}
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Old Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    //   type="password"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="••••••••"
                    value={opassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              {/* old password */}
              {/* current password */}
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    //   type="password"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="••••••••"
                    value={nPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              {/* current password */}
              {/* New Password */}
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    //   type="password"
                    value={cnewpassword}
                    onChange={(e) => setConfirmnNewPassword(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              {/* New PAssword */}
              <p className="text-green-600">{output}</p>
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
