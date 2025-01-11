import React from "react";

const AboutStats = ({ num, title }) => {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold">{num}</h1>
      <p className="text-sm lg:text-base">{title}</p>
    </div>
  );
};

export default AboutStats;
