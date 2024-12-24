import React from "react";
import Heading from "../../../../shared/Heading";
import Chef1 from "../../../../assets/chefs/pic1.png";
import Chef2 from "../../../../assets/chefs/pic2.jpg";
import Chef3 from "../../../../assets/chefs/pic3.png";

const ChefCard = ({ name, title, src }) => {
  return (
    <div className="card bg-base-100 max-w-96 mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-4xl font-Roboto">{name}</h2>
        <p>{title}</p>
      </div>
      <figure>
        <img className="w-full" src={src} alt="Chef" />
      </figure>
    </div>
  );
};

const Chefs = () => {
  return (
    <div className="my-40">
      <Heading
        smallHead={"Check Out Our MasterChefs"}
        largeHead={"Our Chefs"}
      />
      <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChefCard name="Maisha Aria" title="Master Chef" src={Chef1} />
        <ChefCard name="Ahron James" title="Food Screener" src={Chef2} />
        <ChefCard name="Rozert Mitch" title="Master Chef" src={Chef3} />
      </div>
    </div>
  );
};

export default Chefs;
