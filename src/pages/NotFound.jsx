import Footer from "../shared/footer/Footer";
import Heading from "../shared/Heading";
import Navbar from "../shared/Navbar/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="my-52">
        <Heading largeHead={"404 - No Data Found"} />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
