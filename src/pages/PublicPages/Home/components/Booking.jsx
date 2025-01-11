import Heading from "../../../../shared/Heading";
import bookingImg from "../../../../assets/chefs/booking.jpg";
import Input from "../../../PrivatePages/AddFood/AddInput";
import ButtonBordered from "../../../../shared/ButtonBordered";
import ButtonCovered from "../../../../shared/ButtonCovered";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const BookingOption = ({ value }) => {
  return (
    <option value={value} className="bg-base-100">
      {value}
    </option>
  );
};

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("booked successfully");
  };
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate); 
  }, []);
  return (
    <div className="container  mx-auto mb-52">
      <Heading smallHead={"Reservations"} largeHead={"Bookings"} />
      <div className="flex items-center flex-col gap-8 md:flex-row justify-center md:gap-4">
        <div className="basis-[45%]">
          <img src={bookingImg} alt=" booking-image" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex md:basis-[45%] w-full flex-col items-center justify-center mx-auto gap-4">
          <select
            className="w-96 max-w-[80%] bg-inherit outline-none border px-3 py-2 cursor-pointer border-btncol"
            name="Select accomodations"
            id="">
            <BookingOption value={"1 Person"} />
            <BookingOption value={"2 Person"} />
            <BookingOption value={"3 Person"} />
            <BookingOption value={"4 Person"} />
            <BookingOption value={"5 Person"} />
            <BookingOption value={"6 Person"} />
            <BookingOption value={"7 Person"} />
            <BookingOption value={"8 Person"} />
            <BookingOption value={"9 Person"} />
            <BookingOption value={"10 Person"} />
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-96 max-w-[80%] px-3 py-2 bg-inherit border border-btncol"
          />
          <select
            className="w-96 max-w-[80%] bg-inherit outline-none border px-3 py-2 cursor-pointer border-btncol"
            name="Select accomodations"
            id="">
            <BookingOption value={"8 am"} />
            <BookingOption value={"9 am"} />
            <BookingOption value={"10 am"} />
            <BookingOption value={"11 am"} />
            <BookingOption value={"12 am"} />
            <BookingOption value={"1 pm"} />
            <BookingOption value={"2 pm"} />
            <BookingOption value={"3 pm"} />
            <BookingOption value={"4 pm"} />
            <BookingOption value={"5 pm"} />
            <BookingOption value={"6 pm"} />
            <BookingOption value={"7 pm"} />
            <BookingOption value={"8 pm"} />
            <BookingOption value={"9 pm"} />
            <BookingOption value={"10 pm"} />
            <BookingOption value={"12 pm"} />
          </select>

          <div className="w-96 max-w-[80%]">
            <ButtonCovered onClick={handleSubmit} name={"Book Now"} />
          </div>
          <p className="text-center text-base">
            <b>Note:</b> Our operating time is from 8am to 12pm
          </p>
        </form>
      </div>
    </div>
  );
};

export default Booking;
