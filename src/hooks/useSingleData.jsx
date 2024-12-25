import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useSingleData = (id) => {
  const axiosInstance = useAxios();

  const FetchSingleFood = async () => {
    const response = await axiosInstance.get(`/food/${id}`);
    return response.data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Allfoods"],
    queryFn: FetchSingleFood,
  });
  return { data, isError, isLoading };
};

export default useSingleData;
