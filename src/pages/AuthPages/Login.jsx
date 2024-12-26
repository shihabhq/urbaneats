import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../shared/Input";
import { toast } from "react-toastify";
import AuthContext from "../../contexts/AuthContext";
import Heading from "../../shared/Heading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoading, setUser, loginUser, loginWithGoogle, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields", { position: "top-center" });
      return;
    }
    loginUser(email, password)
      .then(() => {
        toast.success("User LoggedIn successfully", { position: "top-center" });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Error Occured: " + err, { position: "top-center" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("User Logged in successfully", {
          position: "top-center",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Unexpected Error Occured" + err, {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (user) {
    return (
      <div className="my-52">
        <Heading largeHead={"You are already logged in"} />;
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-cover justify-center py-12 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://cdn.squaremeal.co.uk/article/9779/images/diy-restaurant-meal-kits-bubala_10052023015403.jpg?w=1200)",
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <div className="w-[90%] mt-8 mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-btncol text-center text-3xl font-extrabold">
              Login to your account
            </h2>
          </div>
          <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              label={"email"}
              title={"Email Address"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Enter your email"}
            />

            <Input
              label={"password"}
              title={"Password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Enter your password"}
            />

            <div>
              <button
                type="Submit"
                className="block px-6 py-2 border border-btncol font-medium text-white bg-btncol text-lg hover:bg-inherit font-poppins rounded-sm hover:text-btncol transition-all text-center duration-200 w-full">
                Login
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium bg-white border-btncol transition-all text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-btncol hover:text-white focus:ring-btncol">
                <FaGoogle className="mr-2 h-5 w-5" />
                Sign in with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-medium text-btncol hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
