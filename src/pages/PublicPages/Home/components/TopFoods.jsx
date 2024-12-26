import React, { useEffect, useState } from "react";
import Heading from "../../../../shared/Heading";
import axios from "axios";
import useAxios from "../../../../hooks/useAxios";
import { toast } from "react-toastify";
import AllFoodsCard from "../../AllFoods/components/AllFoodsCard";
import ButtonBordered from "../../../../shared/ButtonBordered";
import ButtonCovered from "../../../../shared/ButtonCovered";

const TopFoods = () => {
  const axiosInstance = useAxios();
  const [topFoods, setTopFoods] = useState([]);
  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        const response = await axiosInstance.get("/home-foods");
        setTopFoods(response.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchTopFoods();
  }, []);
  return (
    <div className="mt-40">
      <Heading
        smallHead={"Checkout our Popular foods"}
        largeHead={"Top Foods"}
        text={
          "look at what our customers purchase from us. Our customers constantly coming daily to purchase these"
        }
      />

      <div className="container grid mx-auto w-[95%]  lg:w-[80%] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {topFoods.map((foods) => {
          const {
            category,
            description,
            image,
            name,
            origin,
            price,
            _id,
            purchaseCount,
          } = foods;
          return (
            <AllFoodsCard
              key={_id}
              id={_id}
              image={image}
              name={name}
              description={description}
              category={category}
              origin={origin}
              price={price}
              purchaseCount={purchaseCount}
            />
          );
        })}
      </div>
      <div className="flex mt-12 items-center justify-center w-full">
        <ButtonCovered name={"See All Foods"} to={'/all-foods'} />
      </div>
    </div>
  );
};

export default TopFoods;
