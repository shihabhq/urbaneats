import React from "react";

const MyFoodsCard = ({ item, onEdit }) => {
  const { name, image, price, quantity } = item;
  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 font-Roboto">{name}</h2>
      <div className="w-full overflow-hidden rounded bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-base-content">${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="flex mt-4 space-x-2">
        <button onClick={onEdit} className="px-4 py-2 bg-btncol border border-btncol w-full text-white text-lg rounded hover:bg-inherit hover:text-btncol transition-all">
          Update
        </button>
      </div>
    </div>
  );
};

export default MyFoodsCard;
