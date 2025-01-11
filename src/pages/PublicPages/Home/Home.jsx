import SlidersContainer from "./components/SlidersContainer";

import Showcase from "./Showcase/Showcase";
import TopFoods from "./components/TopFoods";
import LatestNews from "./components/LatestNews";
import Chefs from "./components/Chefs";
import Booking from "./components/Booking";

const Home = () => {
  return (
    <>
      <SlidersContainer />
      <Showcase />
      <TopFoods />
      <Chefs />
      <Booking />
      <LatestNews />
    </>
  );
};

export default Home;
