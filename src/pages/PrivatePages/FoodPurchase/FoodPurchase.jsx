import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import useSingleData from "../../../hooks/useSingleData";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaCalendar,
  FaDollarSign,
  FaEnvelope,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Loading from "../../../shared/Loading";
import NotFound from "../../NotFound";

import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";

const FoodPurchase = () => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date());
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: foodItem, isError, isLoading } = useSingleData(`/food/${id}`);

  useEffect(() => {
    const timeInterval = setInterval(() => {
    
      setDate(new Date());
    }, 1000);

    () => clearInterval(timeInterval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (quantity < 1) {
      toast.error("Cannot Purchase items less than 1");
      return;
    }
    if (quantity > foodItem?.quantity) {
      toast.error("Cannot Purchase more products than available in stock");
      return;
    }

  

    try {
      const foodInfo = {
        name: foodItem.name,
        image: foodItem.image,
        quantity: Number(quantity),
        price: Number(foodItem.price),
        buyerEmail: user.email,
        owner: foodItem?.addedBy?.name,
        purchaseTime: date,
      };
      const response = await axiosInstance.post(`/purchase/${id}`, foodInfo);
      if (response.status !== 200) {
        toast.error("Cannot Purchase this");
        return;
      }
      toast.success("purchase Added successfully");
      navigate("/my-orders");
    } catch (error) {
      toast.error("Cannot Purchase this");
      return;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!foodItem || isError) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${foodItem?.image})`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <div className="max-w-lg my-52 mx-auto bg-base-100 rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-btncol text-white">
          <h2 className="text-2xl font-bold leading-6">Purchase Food Item</h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex  items-center mb-2">
              <FaUtensils className="mr-2 text-btncol" />
              <h3 className="text-xl font-medium text-base-content">
                Food Name:{" "}
                <span className="font-semibold">{foodItem?.name}</span>
              </h3>
            </div>

            <div className="flex items-center ">
              <FaDollarSign className="mr-2 text-btncol" />
              <h3 className="text-xl font-medium text-base-content">
                Price:{" "}
                <span className="font-semibold">
                  ${foodItem?.price}
                </span>
              </h3>
            </div>

            <div className="flex items-center mb-2">
              <FaBagShopping className="mr-2 text-btncol" />
              <h3 className="text-xl font-medium text-base-content">
                Available Quantity:{" "}
                <span className="font-semibold">{foodItem?.quantity}</span>
              </h3>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-base-content">
                Quantity
              </label>
              <div className="mt-1">
                <input
                  id="quantity"
                  name="quantity"
                  min={1}
                  placeholder="Enter Quantity"
                  type="number"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-inherit text-base-content focus:outline-none focus:ring-btncol focus:border-btncol sm:text-sm"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center  ">
              <h3 className="text-xl font-medium text-base-content">
                Total:{" "}
                <span className="font-semibold">
                  $
                  {isNaN(foodItem.price * quantity) ||
                  foodItem.price * quantity < 0
                    ? 0
                    : foodItem.price * quantity}
                </span>
              </h3>
            </div>
            <div className="flex sm:items-center justify-start gap-4 sm:flex-row flex-col sm:gap-10 my-8">
              <div>
                <div className="flex items-center mb-2">
                  <FaUser className="mr-2 text-btncol" />
                  <h3 className="text-lg font-medium text-base-content">
                    Buyer Name
                  </h3>
                </div>
                <p className="text-base-content">{user?.displayName}</p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <FaEnvelope className="mr-2 text-btncol" />
                  <h3 className="text-lg font-medium text-base-content">
                    Buyer Email
                  </h3>
                </div>
                <p className="text-base-content">{user?.email}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <FaCalendar className="mr-2 text-btncol" />
                <h3 className="text-lg font-medium text-base-content">
                  Buying Date:
                </h3>
              </div>
              <p className="text-base-content">{date.toLocaleString()}</p>
            </div>

            <div className="mt-6">
              {foodItem?.quantity > 0 &&
              user.email !== foodItem?.addedBy?.email ? (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-btncol rounded-md shadow-sm text-sm font-medium text-white hover:text-btncol transition-all bg-btncol hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btncol">
                  <FaShoppingCart className="mr-2 h-5 w-5" />
                  Complete Purchase
                </button>
              ) : (
                <div>
                  <div
                    role="alert"
                    className="alert mb-2 text-gray-900 py-2 alert-error">
                    <span>
                      {foodItem.quantity === 0
                        ? "Not Available Right now"
                        : "You cannot add your Own Product"}
                    </span>
                  </div>
                  <button
                    disabled
                    className="w-full text-gray-500 bg-base-200 flex justify-center py-2 px-4 border border-btncol rounded-md shadow-sm text-sm font-medium cursor focus:ring-offset-2 focus:ring-btncol">
                    <FaShoppingCart className="mr-2 h-5 w-5" />
                    Complete Purchase
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
