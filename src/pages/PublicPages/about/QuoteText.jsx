import React from "react";
import Heading from "../../../shared/Heading";

const QuoteText = () => {
  return (
    <>
      {/* <Heading
        largeHead={"Reply of a happy client"}
        smallHead={"Will you be a part of it?"}
      /> */}
      <div className="flex flex-col items-center justify-center bg-inherit text-white px-6 mb-40">
        <div className="text-8xl text-btncol">❝</div>
        <p className="text-center text-xl md:text-3xl max-w-2xl">
          The discovery of a new dish does more for the happiness of mankind
          than the discovery of a star.
        </p>
        <p className="text-center text-sm text-btncol mt-4">
          ANTHELME BRILLAT-SAVARIN
        </p>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px bg-btncol w-16"></div>
          <div className="text-btncol mx-2">*</div>
          <div className="h-px bg-btncol w-16"></div>
        </div>
      </div>
    </>
  );
};

export default QuoteText;
