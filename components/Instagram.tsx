import React from "react";
import InstagramImg from "./InstagramImg";

const InstagramImages = [
  "https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1623577284502-d65cdc6ba0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80",
  "https://images.unsplash.com/photo-1589016025017-a2080e95326f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1579454938313-bdf2ac7e870f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1484186949712-7cbb351e69c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1636374526784-cad2f006e7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80",
];

const Instagram = () => {
  return (
    <div className="mt-4 mx-auto sm:max-w-[1240px] sm:px-0 flex flex-col justify-center items-center">
      <h2 className="text-2xl">Follow Us on Instagram</h2>
      <p className="text-xl font-semibold">@Captur</p>
      <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 sm:gap-4">
        {InstagramImages.map((image, index) => {
          return <InstagramImg key={index} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Instagram;
