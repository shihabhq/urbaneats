import React, { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import Input from "./AddInput";
import ButtonCovered from "../../../shared/ButtonCovered";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const AddFoods = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState("1");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !foodName ||
      !category ||
      !image ||
      !description ||
      !price ||
      !origin ||
      !quantity
    ) {
      toast.error("Pleas Fillup all the fields");
      return;
    }
    if (Number(quantity) < 1 || !Number.isInteger(Number(quantity))) {
      toast.error("Quantity must be a valid integer more than 0");
      return;
    }
    if (Number(price) < 1) {
      toast.error("Price must be more than or equal to 1$");
      return;
    }

    const food = {
      name: foodName,
      image: image,
      category: category,
      price: Number(price),
      quantity: Number(quantity),
      origin: origin,
      description: description,
      addedBy: {
        name: user.displayName,
        email: user.email,
      },
      purchaseCount: 0,
    };
    try {
      const response = await axiosInstance.post("/add-food", food);
      if (response.status !== 200) {
        toast.error("There was an error while adding food");
      }
      toast.success("successfully added food and redirecting to my foods page");
      navigate("/my-foods");
    } catch (error) {
      toast.error("There was an error while adding food");
    } finally {
      setCategory("");
      setFoodName("");
      setDescription("");
      setPrice("");
      setImage("");
      setOrigin("");
      setQuantity("");
    }
  };

  return (
    <div className="min-h-[80vh] my-32 flex items-center justify-center  w-[95%] md:w-[80%] mx-auto text-black">
      <div className="bg-base-100 shadow-lg rounded-lg border border-btncol max-w-[45rem]">
        <h1 className="text-2xl font-bold font-Roboto rounded-t-lg text-white py-4 bg-btncol text-center ">
          Add Equipment
        </h1>

        <div className="px-8 py-6">
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
              htmlFor="descrition"
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
              text={"Price(in dollars)"}
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
          <div>
            <h1 className="text-start text-xl text-base-content font-semibold">
              Your information:
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                name={"emailread"}
                placeholder={"Your email"}
                value={user?.email}
                text={"Your email"}
                type={"text"}
                readonly={true}
              />
              <Input
                name={"nameread"}
                placeholder={"Your name"}
                value={user.displayName}
                text={"Your name"}
                type={"text"}
                readonly={true}
              />
            </div>
            <div>
              <ButtonCovered name={"Add Food"} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
