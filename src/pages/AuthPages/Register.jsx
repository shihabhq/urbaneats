import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/Input";
import { toast } from "react-toastify";
import AuthContext from "../../contexts/AuthContext";
import Heading from "../../shared/Heading";

const Register = () => {
  const {user} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const {
    createNewUser,
    updateUserProfile,
    setLoading,
    loginWithGoogle,

  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // regex
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photo || !email || !password) {
      setError("Please fill up all the fields");
      toast.error("Please fill up all the fields", { position: "top-center" });
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      toast.error("Password must be at least 6 characters long", {
        position: "top-center",
      });
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setError("Password must contain one lowercase letter");
      toast.error("Password must contain one lowercase letter", {
        position: "top-center",
      });
      return;
    }
    if (!uppercaseRegex.test(password)) {
      setError("Password must contain one uppercase letter");
      toast.error("Password must contain one uppercase letter", {
        position: "top-center",
      });
      return;
    }

    createNewUser(email, password)
      .then(() => {
        toast.success("User Added Successfully");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            toast.error("Unexpected Error Occured" + err);
          });
      })
      .catch((err) => {
        toast.error("Unexpected Error Occured" + err);
      })
      .finally(() => {
        setLoading(false);
        setError("");
      });
  };
  const handleGoogleRegistration = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Account added Successfully", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Unexpected Error Occured" + err, {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoading(false);
        setError("");
      });
  };
  if (user) {
    return (
      <div className="my-52">
        <Heading largeHead={"You are already Registered"} />;
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover justify-center py-12 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://turismo.antequera.es/wp-content/uploads/2023/04/pexels-robin-stickel-70497.jpg)",
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <div className="mt-8 w-[90%] mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-btncol text-center text-3xl font-extrabold">
              New User Register
            </h2>
          </div>
          <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              label={"username"}
              title={"Enter your name"}
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Enter your name"}
            />
            <Input
              label={"email"}
              title={"Email Address"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Enter your email"}
            />
            <Input
              label={"photo"}
              title={"photo URL"}
              type={"text"}
              value={photo}
              placeholder={"Enter your Photo URL"}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <Input
              label={"password"}
              title={"Password"}
              type={"password"}
              value={password}
              placeholder={"Enter your password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <button
                type="Submit"
                className="block px-6 py-2 border border-btncol font-medium text-white bg-btncol text-lg hover:bg-inherit font-poppins rounded-sm hover:text-btncol transition-all text-center duration-200 w-full">
                Register
              </button>
              <p className="text-sm text-red-500 ">{error && error}</p>
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
                onClick={handleGoogleRegistration}
                className="w-full flex justify-center py-2 px-4 border border-btncol rounded-md shadow-sm text-sm font-medium bg-white transition-all hover:bg-btncol hover:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btncol">
                <FaGoogle className="mr-2 h-5 w-5" />
                Register with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-medium text-btncol hover:underline">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
