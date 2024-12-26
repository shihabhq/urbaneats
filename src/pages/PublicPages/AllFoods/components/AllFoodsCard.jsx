import ButtonBordered from "../../../../shared/ButtonBordered";
import Loading from "../../../../shared/Loading";

const AllFoodsCard = ({
  image,
  name,
  purchaseCount,
  category,
  price,
  quantity,
  origin,
  description,
  id
}) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="flex relative flex-col">
        <img src={image} alt={name} />
        <div className="py-1 px-4  bg-base-200 text-btncol font-semibold text-2xl -mt-8 shadow-lg font-poppins rounded-full">
          ${price}
        </div>
        <div className="absolute top-20 right-0 bg-base-100 text-base-content py-1 pl-4 shadow-lg pr-1 rounded-l-full">
          {category}
        </div>
        <div></div>
      </figure>
      <div className="card-body pt-4">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 50)}...</p>
        <div className="card-actions my-4 justify-end">
          <div className="badge badge-outline">Purchased: {purchaseCount}</div>
          <div className="badge badge-outline">{origin}</div>
        </div>
        {quantity>0 && <p>Only {quantity} Quantity left!</p>}
        <ButtonBordered title={"View Details"} to={`/food/${id}`} />
      </div>
    </div>
  );
};

export default AllFoodsCard;
