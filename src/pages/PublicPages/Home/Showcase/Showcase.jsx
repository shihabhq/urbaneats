import product1 from "../../../../assets/showcase/product1.png";
import product2 from "../../../../assets/showcase/product2.png";
import product3 from "../../../../assets/showcase/product3.png";
import product4 from "../../../../assets/showcase/product4.png";
import ShowCaseCard from "./ShowCaseCard";

const Showcase = () => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 mx-auto mt-20 container gap-8">
      <ShowCaseCard
        src={product1}
        title={"Meat Masala"}
        description={"Get the Best meat mixed masala"}
      />
      <ShowCaseCard
        src={product2}
        title={"Vegetarian"}
        description={"Vegetarian freaks can have the best here"}
      />
      <ShowCaseCard
        src={product3}
        title={"Thai Soup"}
        description={"Best Soup in the State Illinois is here"}
      />
      <ShowCaseCard
        src={product4}
        title={"Sea Food"}
        description={"The best oceans contains the delicios food"}
      />
    </div>
  );
};

export default Showcase;
