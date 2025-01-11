import PageTitle from "../../../shared/PageTitle";
import aboutImg from "../../../assets/about/About.jpg";
import aboutFirstImg from "../../../assets/about/about1.png";
import Heading from "../../../shared/Heading";
import { MdDone } from "react-icons/md";
import AboutStats from "./AboutStats";
import QuoteText from "./QuoteText";

const About = () => {
  return (
    <>
      <PageTitle title={"Our Story"} src={aboutImg} />
      <div className="mt-32">
        <Heading largeHead={"How did we begin?"} />
        <div className="flex items-center md:items-start flex-col md:flex-row justify-center gap-12 md:gap-4 mt-20 mb-32">
          <div className="basis-[45%]">
            <img src={aboutFirstImg} alt="" />
          </div>
          <div className="basis-[45%]">
            <div className="lg:w-[80%] mx-auto">
              <p className="max-w-md text-justify text-sm lg:text-base">
                Every great journey begins with a dream. Our story started in
                2020, when a love for food and a passion for creating
                unforgettable dining experiences came together. What began as a
                small home kitchen has now grown into a place where people
                gather to enjoy great food, laughter, and cherished moments.
              </p>
              <div className="flex my-5 gap-8">
                <AboutStats num={25} title={"Years Experience"} />
                <AboutStats num={10} title={"Expert Chefs"} />
                <AboutStats num={"90%"} title={"Happy Customers"} />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-semibold">
                  Specialities:
                </h1>
                <div className="grid grid-cols-2 max-w-md mt-4">
                  <p className="flex gap-2 text-sm lg:text-base items-center">
                    <MdDone />
                    Food Delivery
                  </p>
                  <p className="flex gap-2 text-sm lg:text-base items-center">
                    <MdDone />
                    Food Catering
                  </p>
                  <p className="flex gap-2 text-sm lg:text-base items-center">
                    <MdDone />
                    Fine Dining
                  </p>
                  <p className="flex gap-2 text-sm lg:text-base items-center">
                    <MdDone />
                    Wedding Ceremony
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteText />
    </>
  );
};

export default About;
