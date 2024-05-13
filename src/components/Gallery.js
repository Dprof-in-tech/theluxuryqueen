import React from "react";
import { Link } from "react-router-dom";

const GalleryComponent = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex relative flex-col items-center justify-self-start gap-3 h-[500px] w-[380px] mb-8"
        >
          <img
            src={item.picture}
            alt={`Contestant ${index + 1}`}
            className="w-full h-full border-white border rounded-xl"
          />
          <div className="absolute bottom-16 left-1 font-bold bg-black px-2 py-1 border rounded-md border-black">
            <p>{item.name}</p>
          </div>
          <Link
            to={{
              pathname: "/vote",
              search: `?name=${encodeURIComponent(item.name)}&picture=${encodeURIComponent(
                item.picture
              )}`,
            }}
          >
            <button className="text-white border-white border rounded-xl px-6 py-3">
              Vote
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;