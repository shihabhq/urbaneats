import { Link } from "react-router-dom";
import ButtonBordered from "../../../../shared/ButtonBordered";
import ButtonCovered from "../../../../shared/ButtonCovered";

const MyFoodsTable = ({ onEdit, food, setProducts }) => {
  const { name, price, image, quantity, _id } = food;
  return (
    <tr className="bg-inherit border-b text-center text-base-content dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        <img
          className="min-w-16 md:w-24 sm:w-20 rounded-lg"
          src={image}
          alt={`${name} image`}
        />
      </td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{quantity}</td>

      <td className="px-6 py-4 flex flex-col items-center justify-center gap-2">
        <ButtonBordered title={"View details"} to={`/food/${_id}`} />
        <ButtonBordered onclick={onEdit} title={"Update"} />
      </td>
    </tr>
  );
};

export default MyFoodsTable;
