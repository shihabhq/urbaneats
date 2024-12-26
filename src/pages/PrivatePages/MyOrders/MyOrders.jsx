import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

import AuthContext from "../../../contexts/AuthContext";
import NotFound from "../../NotFound";
import Loading from "../../../shared/Loading";
import Heading from "../../../shared/Heading";
import ButtonCovered from "../../../shared/ButtonCovered";
import MyOrdersCard from "./MyOrdersCard";
import { toast } from "react-toastify";

const MyOrders = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const fetchMyOrders = async () => {
    const response = await axiosInstance.get("/my-orders", {
      params: { email: user?.email },
    });
    return response.data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Myfoods"],
    queryFn: fetchMyOrders,
    enabled: !!user?.email,
  });
 

  const [orders, setOrders] = useState(data);
  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const handleDelete = async (orderId) => {
    try {
      const response = await axiosInstance.delete(`/orders/${orderId}`);
      if (response.status !== 200) {
        toast.error("There was an error while deleting order");
      }
      toast.success("Successfully Deleted Order");
      const newOrders = orders.filter((order) => order._id !== orderId);
      setOrders(newOrders);
    } catch (error) {
      toast.error("There was an error while deleting order");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }
  if (!orders || orders?.length < 1) {
    return (
      <div className="my-40 flex flex-col items-center">
        <Heading largeHead={"You have not ordered anything yet"} />
        <div className="w-fit">
          <ButtonCovered name={"Go to All Food Page"} to={"/all-foods"} />
        </div>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 container mx-auto my-52 gap-10 lg:w-[80%] w-[95%]">
      {orders.map((item, index) => {
        return (
          <MyOrdersCard
            key={item?._id}
            foodName={item?.name}
            foodOwner={item?.owner}
            orderDate={item?.purchaseTime}
            onclick={() => handleDelete(item?._id)}
            price={item?.price}
            quantity={item?.quantity}
            orderId={index + 1}
            image={item?.image}
          />
        );
      })}
    </div>
  );
};

export default MyOrders;
