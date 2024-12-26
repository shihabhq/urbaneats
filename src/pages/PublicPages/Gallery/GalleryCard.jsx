import React from "react";

const GalleryCard = ({src,name,description}) => {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer gallery-card group">
      {/* Image */}
      <img
        src={src}
        alt="Delicious Salad"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute transition-all hid flex rounded-lg items-center justify-center duration-150 hover:bg-black hover:bg-opacity-50 inset-0">
        <div className=" w-[80%] h-[80%] mt-4  flex flex-col  gap-2 items-center justify-center border my-auto mx-auto border-white rounded-sm">
          <h1 className="text-2xl text-white text-center font-semibold font-Roboto">
            Added By {name}
          </h1>
          <p className="max-w-sm text-center text-white font-poppins font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
