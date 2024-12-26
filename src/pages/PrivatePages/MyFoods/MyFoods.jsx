import React, { useContext, useEffect, useState } from "react";
import useSingleData from "../../../hooks/useSingleData";
import useAxios from "../../../hooks/useAxios";
import AuthProvider from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../shared/Loading";
import NotFound from "../../NotFound";
import Heading from "../../../shared/Heading";
import ButtonCovered from "../../../shared/ButtonCovered";
import AuthContext from "../../../contexts/AuthContext";
import MyFoodsCard from "./components/MyFoodsCard";
import UpdateModal from "./components/UpdateModal";
import { use } from "react";
import { toast } from "react-toastify";

const MyFoods = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [foodToEdit, setFoodToEdit] = useState(null);

  const fetchMyFoods = async () => {
    const response = await axiosInstance.get("/my-foods", {
      params: { email: user?.email },
    });
    return response.data;
  };
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["myFoods"],
    queryFn: fetchMyFoods,
  });
  const [myFoods, setMyFoods] = useState(data || []);
  useEffect(() => {
    if (data) {
      setMyFoods(data);
    }
  }, [data]);
  const handleEdit = (item) => {
    setOpenModal(true);
    setFoodToEdit(item);
  };
  const handleUpdate = async (updatedFood) => {
    try {
      const response = await axiosInstance.put(
        `/my-foods/${updatedFood._id}`,
        updatedFood
      );
      const updatedFoods = myFoods.map((food) =>
        food._id === updatedFood._id ? { ...food, ...updatedFood } : food
      );
      toast.success('successfully updated data')
      setMyFoods(updatedFoods);
      setOpenModal(false);
    } catch (error) {
      toast.error("There was an error while updating data");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }
  if (!myFoods || myFoods?.length < 1) {
    return (
      <div className="my-40 flex flex-col items-center">
        <Heading largeHead={"You have not Added any foods yet"} />
        <div className="w-fit">
          <ButtonCovered name={"Go to All Food Page"} to={"/add-food"} />
        </div>
      </div>
    );
  }

  return (
    <div className="my-44">
      <Heading largeHead={"Your Added Products"} />
      {openModal && (
        <UpdateModal
          food={foodToEdit}
          handleUpdate={handleUpdate}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="container grid mx-auto w-[95%]  lg:w-[80%] gap-8 sm:grid-cols-2 lg:grid-cols-3 my-12">
        {myFoods.map((item) => {
          return (
            <MyFoodsCard
              key={item._id}
              item={item}
              onEdit={() => handleEdit(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyFoods;
