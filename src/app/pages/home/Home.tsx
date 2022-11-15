import React, { useState } from "react";
import AuthModal from "../../components/shared/AuthModal";
import Card from "../../components/card/Card";
import CardCarousel from "../../components/card/CardCarousel";
interface CardObject {
  name: string;
  clubId: string;
  description: string;
  image: string;
  favorite?: boolean;
}
function Home() {
  const arr: { name: string; desc: string }[] = [
    { name: "void", desc: "THis is the void club" },
  ];
  const info: CardObject[] = [
    {
      clubId: "VoidId",
      name: "Void Tech 1",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 2",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 3 ",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 4",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 5",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 6",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 7",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 8",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 9",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 10",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 11",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 12",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
    {
      clubId: "VoidId",
      name: "Void Tech 13",
      description: "Void Tech is the best club ever!",
      image: "https://placeimg.com/400/225/arch",
    },
  ];
  return (
    //div for search bar
    <div>
      {/* {arr.map((club) => (
        <div className="card w-80 bg-base-90 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <div className="topnav">
          <a className="active" href="#home"></a>
          <input type="text" placeholder="Search.."></input>
        </div>
        <div>Filters</div>
        <div className="row">
          <div className="col-sm-6">Top Picks</div>

          <div className="col-sm-6">Perfect for Fall</div>
          <div className="col-sm-6">New Clubs</div>
          <div className="col-sm-6">Environmental Clubs</div>
        </div>
      </div> */}
      <CardCarousel clubsInfo={info} />
    </div>
  );
}

export default Home;
