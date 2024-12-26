import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useSingleData = (url) => {
  const axiosInstance = useAxios();

  const FetchSingleFood = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Allfoods"],
    queryFn: FetchSingleFood,
  });
  return { data, isError, isLoading };
};

export default useSingleData;
