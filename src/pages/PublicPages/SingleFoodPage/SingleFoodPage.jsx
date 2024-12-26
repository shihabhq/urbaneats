import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { FaBox, FaGlobeAmericas, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../shared/Loading";
import useAxios from "../../../hooks/useAxios";
import NotFound from "../../NotFound";
import useSingleData from "../../../hooks/useSingleData";

const SingleFoodPage = () => {
  const { id } = useParams();

  const { data: foodItem, isError, isLoading } = useSingleData(`/food/${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (!foodItem || isError) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8 my-52">
      <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              className="w-full h-full object-cover"
              src={foodItem.image}
              alt={foodItem.name}
            />
          </div>
          <div className="md:w-2/3 p-8">
            <div className="uppercase tracking-wide text-sm text-btncol font-semibold mb-1">
              {foodItem.category}
            </div>
            <h1 className="text-3xl font-bold text-base-content mb-2">
              {foodItem.name}
            </h1>
            <p className="text-gray-600 mb-4">{foodItem.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-btncol">
                ${foodItem.price.toFixed(2)}
              </span>
              <span className="text-base-content px-4 rounded-full border border-btncol">
                Quantity: {foodItem.quantity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center ">
                <FaBox className="text-base-content mr-2" />
                <span className="text-base-content">
                  Available: {foodItem.quantity}
                </span>
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="text-base-content mr-2" />
                <span className="text-base-content">
                  Purchased: {foodItem.purchaseCount} times
                </span>
              </div>
              <div className="flex items-center">
                <FaUser className="text-base-content mr-2" />
                <span className="text-base-content">
                  Added by: {foodItem.addedBy.name}
                </span>
              </div>
              <div className="flex items-center">
                <FaGlobeAmericas className="text-base-content mr-2" />
                <span className="text-base-content">
                  Origin: {foodItem.origin}
                </span>
              </div>
            </div>

            <Link
              to={`/food-purchase/${id}`}
              className="w-full px-6 py-3  bg-btncol text-btncol border border-btncol bg-inherit text-lg font-semibold rounded-lg hover:bg-btncol hover:text-white focus:outline-none focus:ring-2 focus:ring-btncol focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <FaShoppingCart className="mr-2" />
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodPage;
