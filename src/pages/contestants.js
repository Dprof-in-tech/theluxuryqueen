import React from "react";
import GalleryComponent from "../components/Gallery";
import Navbar from "../components/Navbar";
import About from "../images/about.png";

const data = [
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Deon",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Mirabel",
    number: "08086942389",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Isaac",
    number: "07074908754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Gus",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Huncho",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Bob",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Marshall",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Nathan",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Aburey",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Kendrick",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Coleson",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Jermaine",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Joyner",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Lucas",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Justin",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Billy",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Hozier",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Wisdom",
    number: "08078598754",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Deo",
    number: "09044478912",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Liam",
    number: "08147902377",
  },
  {
    picture: About,
    button: "https://example.com/vote1",
    name: "Hemsworth",
    number: "08063902114",
  },
];

const Gallery = () => {
  return (
    <section className="max-w-8xl mx-auto w-full h-fit-content">
      <Navbar />
      <div className="flex flex-col gap-6 text-white px-6 py-4">
        <h1 className="text-[2.5rem] self-center font-semibold">
          Meet our Contestants
        </h1>
        <GalleryComponent data={data} />
      </div>
    </section>
  );
};

export default Gallery;
