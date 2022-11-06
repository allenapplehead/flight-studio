import { useState } from "react";
import { register } from "../appwrite/appwrite_client.js";
import Navbar from "../components/Navbar"; //imported to setLogin to true when successfully logged in

export const Login = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputTerms, setTerms] = useState(false);

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
  const handleTerms = (event) => {
    setTerms(event.target.value);
    //console.log(inputTerms)
  };

  const handleSubmit = () => {
    if (inputTerms) {
      const mytest = register(inputEmail, inputPassword, inputName);
      console.log(mytest);
    }
  };

  return (
    <div class="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Registration Form
        </div>
        <div class="">
          <div>
            <input
              type="text"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
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
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email Address "
              onChange={handleEmail}
              value={inputEmail}
              required
            />
          </div>
          <div class="">
            <input
              type="password"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password "
              onChange={handlePassword}
              value={inputPassword}
              minLength={8}
              required
            />
          </div>
          <div class="flex">
            <input type="checkbox" class="border-sky-400 " value="" />
            <div class="px-3 text-gray-500">
              I accept the <a href="">Terms & Conditions</a>
            </div>
            <input
              type="checkbox"
              class="border-sky-400 "
              onChange={handleTerms}
              value={inputTerms}
              required
            />
            <div class="px-3 text-gray-500">
              I accept the <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div class="flex justify-center my-6">
            <button
              class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
          <div class="flex justify-center ">
            <p class="text-gray-500">Already have an account? </p>
            <a class="text-sky-600 pl-2">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
