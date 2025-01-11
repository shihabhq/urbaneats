import React, { useState } from "react";
import ButtonCovered from "../../../../shared/ButtonCovered";
import Input from "../../AddFood/AddInput";

const UpdateModal = ({ food, handleUpdate, setOpenModal }) => {
  const [foodName, setFoodName] = useState(food?.name || "");
  const [category, setCategory] = useState(food?.category || "");
  const [image, setImage] = useState(food?.image || "");
  const [description, setDescription] = useState(food?.description || "");
  const [price, setPrice] = useState(food?.price || "");
  const [origin, setOrigin] = useState(food?.origin || "");
  const [quantity, setQuantity] = useState(food?.quantity.toString() || "1");

  const handleSubmit = () => {
    const updatedFood = {
      _id: food._id,
      name: foodName,
      category,
      image,
      description,
      price:Number(price),
      origin,
      quantity:Number(quantity),
    };
    handleUpdate(updatedFood);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="bg-[#00000058] w-full h-full z-10 absolute"
        onClick={() => setOpenModal(false)}></div>

      <div className="bg-base-100 z-20 p-6 rounded-lg max-w-3xl w-[95%] mobile:w-[80%] shadow-lg">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-2">
            <Input
              changeVal={setFoodName}
              value={foodName}
              name={"foodname"}
              placeholder={"Enter Food Name"}
              text={"Food Name"}
              type={"text"}
              readonly={false}
            />
            <Input
              name={"category"}
              placeholder={"Enter Category Name"}
              text={"Category Name"}
              type={"text"}
              changeVal={setCategory}
              value={category}
              readonly={false}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-2">
            <Input
              name={"image"}
              value={image}
              changeVal={setImage}
              placeholder={"Enter Food Image URL"}
              text={"Enter Food Image URL"}
              type={"text"}
              readonly={false}
            />
          </div>

          <div className="grid grid-cols-1 mb-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-base-content mb-2">
              Food Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea bg-inherit border h-[150px] text-base-content border-gray-300"
              placeholder="Food Description"></textarea>
          </div>

          <div className="grid grid-cols-2 mobile:grid-cols-3 gap-2 mb-2">
            <Input
              name={"price"}
              value={price}
              changeVal={setPrice}
              placeholder={"Price"}
              text={"Price (in dollars)"}
              type={"number"}
              readonly={false}
            />
            <Input
              value={quantity}
              changeVal={setQuantity}
              name={"quantity"}
              placeholder={"Enter Quantity"}
              text={"Quantity"}
              type={"number"}
              readonly={false}
            />
            <Input
              name={"origin"}
              value={origin}
              changeVal={setOrigin}
              placeholder={"Origin of the food"}
              text={"Origin"}
              type={"text"}
              readonly={false}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-inherit  border border-btncol w-full text-lg rounded hover:bg-btncol text-btncol hover:text-white transition-all">
            Update Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
