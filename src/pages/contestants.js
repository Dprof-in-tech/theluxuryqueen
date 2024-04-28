import React from "react";
import GalleryComponent from "../components/Gallery";
import Navbar from "../components/Navbar";
import { data } from "../components/contestantData";

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
