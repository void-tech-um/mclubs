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
  const filters_personal = [
    {
      name: "Favorite",
      checked: false,
    },

    {
      name: "Joined",
      checked: false,
    },
  ];

  const filters_time = [
    {
      name: "1-3 Hours Per Week",
      checked: false,
    },
    {
      name: "4-6 Hours Per Week",
      checked: false,
    },

    {
      name: "7+ Hours Per Week",
      checked: false,
    },
  ];

  const filters_topics = [
    {
      name: "Technology",
      checked: false,
    },

    {
      name: "Politics",
      checked: false,
    },

    {
      name: "Design",
      checked: false,
    },

    {
      name: "Engineering",
      checked: false,
    },

    {
      name: "Art",
      checked: false,
    },
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
    <div className="pl-10">
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
        <span>See All Clubs</span>
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
                <div>Personal</div>
                <div>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a className="font-normal">Favorites</a>
                </div>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a className="font-normal">Joined</a>
                </div>
              </li>
              <li>
                <div>Time Commitment</div>
                <div>
                  <input
                    type="checkbox"
                    checked={filter.tech}
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a className="font-normal">1-3 Hours Per Week</a>
                </div>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs text-primary"
                  />
                  <a className="font-normal">4-6 Hours Per Week</a>
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
