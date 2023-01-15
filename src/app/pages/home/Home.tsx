import React, { useState } from "react";
import AuthModal from "../../components/shared/AuthModal";
import Card from "../../components/card/Card";
import CardCarousel from "../../components/card/CardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { filterProps } from "framer-motion";
interface CardObject {
  name: string;
  clubId: string;
  description: string;
  image: string;
  favorite?: boolean;
}
function Home() {
  const arr: { name: string; desc: string }[] = [
    { name: "void", desc: "This is the void club" },
  ];
  const [filter, setFilter] = useState<any>({});
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
      <div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute inset-0 left-11 my-auto pl-3"
          />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-white w-full max-w-xs my-7 mx-10 pl-10"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-primary text-small font-bold ml-10">
          Filters:
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost mx-2">
              <FontAwesomeIcon icon={faPlus} className="primary font-bold" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 bg-base-100 rounded-box w-100"
            >
              <li>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute inset-0 left-3 my-auto pl-3"
                  />
                  <input
                    type="text"
                    placeholder="Search Topics"
                    className="input input-bordered input-white w-small max-w-xs pl-7"
                  />
                </div>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    checked={filter.tech}
                    onClick={() => {
                      setFilter((prev: any) => {
                        return { ...prev, tech: !prev.tech };
                      });
                    }}
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a className="font-normal">Tech</a>
                </div>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a>Fun</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-primary text-small font-bold mr-8">
          Sort
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-ghost mx-2">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="primary font-bold"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 bg-base-100 rounded-box w-100"
            >
              <li>
                <div>
                  <button className="btn btn-circle btn-outline btn-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2 w-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></svg>
                  </button>
                  <input
                    type="button"
                    checked={filter.tech}
                    onClick={() => {
                      setFilter((prev: any) => {
                        return { ...prev, tech: !prev.tech };
                      });
                    }}
                    className="button button-xs text-primary"
                  />
                  <a className="font-normal">Alphabetical</a>
                </div>
              </li>
              <li>
                <div>
                  <button className="btn btn-circle btn-outline btn-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2 w-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></svg>
                  </button>
                  <input
                    type="button"
                    checked={filter.tech}
                    onClick={() => {
                      setFilter((prev: any) => {
                        return { ...prev, tech: !prev.tech };
                      });
                    }}
                    className="button button-xs text-primary"
                  />
                  <a className="font-normal">Popular</a>
                </div>
              </li>
              <li>
                <div>
                  <button className="btn btn-circle btn-outline btn-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2 w-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></svg>
                  </button>
                  <input
                    type="button"
                    checked={filter.tech}
                    onClick={() => {
                      setFilter((prev: any) => {
                        return { ...prev, tech: !prev.tech };
                      });
                    }}
                    className="button button-xs text-primary"
                  />
                  <a className="font-normal">Recently Added</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-primary ml-8 mt-10 text-xl">
        <strong>Top Picks</strong>
      </h2>
      <CardCarousel clubsInfo={info} />
      <h3 className="text-primary ml-8 mt-10 text-xl">
        <strong>Perfect for Fall</strong>
      </h3>
      <CardCarousel clubsInfo={info} />
      <h4 className="text-primary ml-8 mt-10 text-xl">
        <strong>New Clubs</strong>
      </h4>
      <CardCarousel clubsInfo={info} />
      <h5 className="text-primary ml-8 mt-10 text-xl">
        <strong>Environmental Clubs</strong>
      </h5>
      <CardCarousel clubsInfo={info} />
    </div>
  );
}

export default Home;
