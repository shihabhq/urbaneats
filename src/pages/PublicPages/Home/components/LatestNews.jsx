import Heading from "../../../../shared/Heading";
import image1 from "../../../../assets/news/image1.png";
import image2 from "../../../../assets/news/image2.png";
import ButtonCovered from "../../../../shared/ButtonCovered";

const LatestNews = () => {
  return (
    <div className="my-40 container mx-auto">
      <Heading
        smallHead={"Check Out What We are discussing"}
        largeHead={"Our Latest News"}
      />
      <div className="flex flex-col md:flex-row items-start gap-6 justify-center sm:w-[80%] mx-auto">
        <img src={image1} alt="" className="w-[80%] md:w-1/2" />
        <div>
          <div className="text-start flex flex-col gap-2 max-w-2xl mx-auto">
            <h3 className="text-btncol font-poppins text-lg ">News</h3>
            <h1 className="font-bold uppercase font-Roboto text-3xl">
              New Items We Found in 2024
            </h1>
            <p className="text-base text-gray-400 font-poppins text-justify">
              We are thrilled to announce that our dedicated team has delivered
              wonderful result to make a great impact on the society about food
              inno...
            </p>
          </div>
          <div className="w-52 mt-4">
            <ButtonCovered name="Read More" />
          </div>
        </div>
      </div>
      <div className="flex mt-24 flex-col-reverse md:flex-row items-start gap-6 justify-center sm:w-[80%] mx-auto">
        <div>
          <div className="text-start flex flex-col gap-2 max-w-2xl mx-auto">
            <h3 className="text-btncol font-poppins text-lg ">News</h3>
            <h1 className="font-bold uppercase font-Roboto text-3xl">
              What makes a perfect Chicken Grill?
            </h1>
            <p className="text-base text-gray-400 font-poppins text-justify">
              All of us are aware of the fact that chicken is one of the most
              loved food items in the world. It is a versatile ingredient that
              can be used in a variety of dishes. One of the most popular ways
              to cook chicken is by grill...
            </p>
          </div>
          <div className="w-52 mt-4">
            <ButtonCovered name="Read More" />
          </div>
        </div>
        <img src={image2} alt="" className="w-[80%] md:w-1/2" />
      </div>
    </div>
  );
};

export default LatestNews;
