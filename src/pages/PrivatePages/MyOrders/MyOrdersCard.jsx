import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";

const MyOrdersCard = ({
  orderId,
  foodName,
  quantity,
  price,
  orderDate,
  foodOwner,
  onclick,
  image,
}) => {

  const humanReadableFormat = moment(orderDate).format("MMMM Do YYYY, h:mm A");
  return (
    <div className="bg-base-100 border border-base-300  rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order #{orderId}</h2>
      <div className="flex flex-col mobile:flex-row gap-4">
        <img
          src={image}
          alt={foodName}
          className="w-32 h-32 rounded-lg object-cover bg-gray-100"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-base-content">{foodName}</h3>
          <div className="space-y-1 mt-1">
            <p className="text-base-content">Quantity: {quantity}</p>
            <p className="text-base-content">Price: ${price}</p>
            <p className="text-base-content">Order Date: {humanReadableFormat}</p>
            <p className="text-base-content">Food Owner: {foodOwner}</p>
            <p className="text-base-content">Total Cost: ${price * quantity}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onclick}
        className="h-10 px-4 mt-4 py-2 flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors self-start ml-auto">
        <FaTrashAlt className="w-4 h-4" />
        Delete Order
      </button>
    </div>
  );
};

export default MyOrdersCard;
