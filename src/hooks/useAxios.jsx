import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const useAxios = () => {
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
          //TODO: logout user:
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxios;
