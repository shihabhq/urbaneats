import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: "https://urbaneats-server.vercel.app",
    withCredentials: true,
  });
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOut()
            .then(() => toast.error("logged out user as you are unauthorized"))
            .catch((e) => toast.error("something went wrong"));

          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxios;
