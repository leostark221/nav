import React from "react";
import images from "../../images";

export default function Header() {
  return (
    <div className="bg-darkerGray w-[200px] items-center flex-col flex items-center h-screen">
      <div className="flex  gap-4 flex-col h-40 mt-40">
        <div className="gap-2 items-center flex">
          <img
            src={images.user}
            alt=""
            className="cursor-pointer 
          active:opacity-50 w-4"
          />
          <div
            className="cursor-pointer 
          active:opacity-50 text-sm font-semibold"
          >
            Users
          </div>
        </div>
        <div className="gap-2 items-center flex">
          <img
            src={images.polish}
            alt=""
            className="cursor-pointer 
          active:opacity-50 w-4"
          />
          <div
            className="cursor-pointer 
          active:opacity-50 text-sm font-semibold"
          >
            Product Seller
          </div>
        </div>
        <div className="gap-2 items-center flex">
          <img
            src={images.hair}
            alt=""
            className="cursor-pointer 
          active:opacity-50 w-4"
          />
          <div
            className="cursor-pointer 
          active:opacity-50 text-sm font-semibold"
          >
            Salon Services
          </div>
        </div>
      </div>
    </div>
  );
}
