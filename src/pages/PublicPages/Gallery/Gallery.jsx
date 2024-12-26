import PageTitle from "../../../shared/PageTitle";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: "https://i.ibb.co/2gWRXfv/salad.png",
      uploadedBy: "Shihab Haque",
      alt: "Salad Delight",
      description: "A fresh and delicious salad ready to be served.",
    },
    {
      id: "gallery-002",
      src: "https://i.ibb.co.com/QfnRyff/1.png",
      uploadedBy: "Maria Gomez",
      alt: "Creamy Pasta",
      description: "A bowl of creamy pasta topped with cheese.",
    },
    {
      id: "gallery-003",
      src: "https://i.ibb.co.com/ZS4NLXD/sweet.png",
      uploadedBy: "John Doe",
      alt: "Sweet Treat",
      description: "A delightful dessert to satisfy your cravings.",
    },
    {
      id: "gallery-004",
      src: "https://i.ibb.co.com/GvMGRcH/cheeseburger.png",
      uploadedBy: "Emma Lee",
      alt: "Cheesy Burger",
      description:
        "A mouthwatering burger with layers of cheese and vegetables.",
    },
    {
      id: "gallery-005",
      src: "https://i.ibb.co.com/D9jYgJ6/grill.png",
      uploadedBy: "Liam Brown",
      alt: "Grilled Steak",
      description: "A perfectly grilled steak served with vegetables.",
    },
    {
      id: "gallery-006",
      src: "https://i.ibb.co.com/HGZPszR/pizza.png",
      uploadedBy: "Sophia Clark",
      alt: "Italian Pizza",
      description: "A classic Italian pizza with fresh toppings.",
    },
    {
      id: "gallery-007",
      src: "https://i.ibb.co.com/K79sjM3/coffee.png",
      uploadedBy: "Olivia Smith",
      alt: "Morning Coffee",
      description: "A steaming cup of coffee to start your day.",
    },
    {
      id: "gallery-008",
      src: "https://i.ibb.co.com/1JHZwJP/soup.png",
      uploadedBy: "Ethan Wilson",
      alt: "Hot Soup",
      description: "A bowl of hot soup perfect for a chilly day.",
    },
    {
      id: "gallery-009",
      src: "https://i.ibb.co.com/DCXZRWx/smoothie.png",
      uploadedBy: "Ava Jones",
      alt: "Berry Smoothie",
      description: "A refreshing smoothie made with fresh berries.",
    },
    {
      id: "gallery-010",
      src: "https://i.ibb.co.com/LNtdTGZ/some.png",
      uploadedBy: "Noah Davis",
      alt: "Fluffy Pancakes",
      description: "A stack of fluffy pancakes drizzled with syrup.",
    },
    {
      id: "gallery-011",
      src: "https://i.ibb.co.com/Jc5kfyS/sushi.png",
      uploadedBy: "Aiden Scott",
      alt: "Sushi Rolls",
      description: "A plate of fresh sushi rolls with a variety of fillings.",
    },
    {
      id: "gallery-012",
      src: "https://i.ibb.co.com/k102pXv/fruitsalad.png",
      uploadedBy: "Mia Lee",
      alt: "Fruit Salad",
      description: "A refreshing fruit salad made with seasonal fruits.",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index); 
    setOpen(true); 
  };
  return (
    <div>
      <PageTitle
        src={"https://i.ibb.co.com/Gk58XPN/image.png"}
        title={"Our Gallery"}
      />
      <div className="container my-32 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 w-[90%] gap-8">
        {slides.map((slide, index) => {
          return (
            <div key={index} onClick={() => openLightbox(index)}>
              <GalleryCard
                src={slide.src}
                description={slide.description}
                name={slide.uploadedBy}
              />
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Gallery;
