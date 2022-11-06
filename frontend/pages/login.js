import { useState } from "react";
import { register } from "../appwrite/appwrite_client.js";
import Navbar from "../components/Navbar.jsx";
export const Login = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    //console.log(inputName)
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    //console.log(inputEmail)
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    //console.log(inputPassword)
  };

  const handleSubmit = () => {
    if (inputName != "" && inputEmail != "" && inputPassword != "") {
      const mytest = register(inputEmail, inputPassword, inputName);
      console.log(mytest);
    }
  };

  return (
    <div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full rounded-3xl">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Registration Form
        </div>
        <div className="">
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Name "
              onChange={handleName}
              value={inputName}
              maxLength={128}
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email Address "
              onChange={handleEmail}
              value={inputEmail}
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password "
              onChange={handlePassword}
              value={inputPassword}
              minLength={8}
              required
            />
          </div>
          <div className="flex">
            <input type="checkbox" className="border-sky-400 " value="" />
            <div className="px-3 text-gray-500">
              I accept the <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <button
              className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an account? </p>
            <a href="signin" className="text-sky-600 pl-2">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
