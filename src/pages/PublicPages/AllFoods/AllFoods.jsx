import PageTitle from "../../../shared/PageTitle";
import axios from "axios";

import ButtonCovered from "../../../shared/ButtonCovered";
import AllFoodsCard from "./components/AllFoodsCard";
import Loading from "../../../shared/Loading";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const AllFoods = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allfoods"],
    queryFn: () =>
      axios
        .get("https://urbaneats-server.vercel.app/foods")
        .then((res) => res.data),
  });

  const [currentData, setCurrentData] = useState(data || []);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (data?.length > 0) {
      setCurrentData(data);
    }
  }, [data]);

  const handleSearch = async () => {
    if (!searchText.trim()) {
      toast.warn("Please enter a search term.");
      return;
    }
    setIsSearching(true);
    try {
      const response = await axios.get(
        "https://urbaneats-server.vercel.app/foods",
        {
          params: { search: searchText },
        }
      );
      setCurrentData(response.data);
    } catch (e) {
      toast.error("unable to get data");
    } finally {
      setIsSearching(false), setSearchText("");
    }
  };
  const handleSort = () => {
    if (currentData?.length > 0) {
      const sortedData = [...currentData].sort((a, b) => a.price - b.price);
      setCurrentData(sortedData);
    }
  };

  return (
    <div>
      <PageTitle
        src={
          "https://th.bing.com/th/id/OIP.pQDb49sa3kzRGxV_FYQJjQHaE8?rs=1&pid=ImgDetMain"
        }
        title={"All Foods"}
      />
      <div className=" w-[80%] max-w-3xl mx-auto flex-col md:flex-row flex items-center mt-24  justify-center gap-0">
        <input
          name={"search"}
          placeholder={"Search Foods"}
          type={"text"}
          required
          className="appearance-none block w-fit max-w-[80%] px-3 py-3 border border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 md:border-r-0 bg-inherit text-base-content focus:outline-none focus:ring-btncol focus:border-btncol sm:text-sm mb-4 md:mb-0"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="flex gap-3">
          <ButtonCovered name={"Search"} onClick={handleSearch} />
          <ButtonCovered name={"Sort By Price"} onClick={handleSort} />
        </div>
      </div>
      <div className="container grid mx-auto w-[95%]  lg:w-[80%] gap-8 sm:grid-cols-2 lg:grid-cols-3 my-24">
        {isLoading || isSearching ? (
          <div className="col-span-3">
            <Loading />
          </div>
        ) : currentData?.length > 0 ? (
          currentData.map((data) => {
            const {
              image,
              name,
              category,
              price,
              quantity,
              origin,
              _id,
              description,
              purchaseCount,
            } = data;
            return (
              <AllFoodsCard
                image={image}
                key={_id}
                name={name}
                category={category}
                price={price}
                quantity={quantity}
                origin={origin}
                description={description}
                purchaseCount={purchaseCount}
                id={_id}
              />
            );
          })
        ) : (
          <div className="col-span-3">
            <h1 className="text-center font-Roboto font-semibold text-base-content text-6xl my-24">
              No Data Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
