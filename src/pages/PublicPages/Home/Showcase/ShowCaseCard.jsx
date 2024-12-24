import React from "react";

const ShowCaseCard = ({ src, title, description }) => {
  return (
    <div className="flex flex-col items-center mx-auto shadow-md rounded-lg p-4 max-w-xs">
      <img src={src} className="rounded-full w-32 h-32 object-cover mb-4" />
      <h3 className="text-xl font-bold font-Roboto mb-2">{title}</h3>
      <p className="text-base text-center text-gray-500">{description}</p>
    </div>
  );
};

export default ShowCaseCard;
