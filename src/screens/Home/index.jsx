import React from "react";
import images from "../../images";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl  bg-red-500 mx-auto">
        <img src={images.search} alt="" />
        <input type="text" placeholder="Search" className="bg-darkerGray" />
      </div>
    </div>
  );
}
