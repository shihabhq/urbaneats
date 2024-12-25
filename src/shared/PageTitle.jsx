import React from "react";

const PageTitle = ({ title, src }) => {
  return (
    <div
      className="w-full relative pt-52 pb-24 flex items-center justify-center bg-cover"
>
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            `url(${src})`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <h1 className="text-6xl font-Roboto text-white font-bold">{title}</h1>
    </div>
  );
};

export default PageTitle;
