import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, handleLogin, handleGoogleSignin, handleGithubSignin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        event.target.reset();
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    handleGithubSignin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="relative  flex flex-col justify-center bg-cyan-50 min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-cyan-100 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="#" className="text-xs  text-orange-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 ">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            <FaGoogle className="text-sky-700 text-xl"></FaGoogle>
          </button>
          <button
            onClick={handleGithubLogin}
            className="  flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            <FaGithub className="text-sky-700 text-xl"></FaGithub>
          </button>
        </div>

        <p className="mt-8  font-light text-center text-gray-700">
          Don't have an account?
          <Link
            to="/register"
            className="font-medium ml-2 text-orange-600 hover:underline"
          >
            Please Register
          </Link>
        </p>
        <div className="text-center mt-5">
          <p className="text-red-700">{error}</p>
          <p className="text-green-700">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
