import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
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
            .then(() => console.log("logged out user as you are unauthorized"))
            .catch((e) => console.log(e));

          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return { axiosInstance };
};

export default useAxios;
