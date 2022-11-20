import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../AuthModal";

function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const toggleMenu = (): void => {
    try {
      (document.activeElement as HTMLElement).blur();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className={`sm:navbar bg-base-100 collapse  ${
        openMenu ? "collapse-open" : "collapse-close"
      }`}
      tabIndex={0}
    >
      <div className="flex-1 gap-6 ">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-extra text-primary sm:inline-flex hidden"
        >
          Clubs
        </Link>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-semibold text-black sm:inline-flex hidden"
        >
          Clubs
        </Link>
        <Link
          to="/clubs/new"
          className="btn btn-ghost normal-case text-xl font-semibold text-black sm:inline-flex hidden"
        >
          Register Your Club
        </Link>
      </div>

      <div className="flex-none sm:inline-flex hidden justify-self-end ">
        <div tabIndex={0} className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={toggleMenu}>
              <Link to="/">Profile</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/">Settings</Link>
            </li>
            <li
              onClick={() => {
                toggleMenu;
                setShowModal(true);
              }}
            >
              <span>Login</span>
            </li>
            <li
              onClick={() => {
                toggleMenu;
                setShowModal(true);
              }}
            >
              <span>Signup</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse-title sm:hidden flex justify-between p-4">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-extra text-primary"
        >
          Clubs
        </Link>
        <button
          className="btn btn-square btn-ghost block justify-self-end"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="collapse-content sm:hidden">
        <p className="flex flex-col items-start">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-semibold text-black "
          >
            Clubs
          </Link>
          <Link
            to="/clubs/new"
            className="btn btn-ghost normal-case text-xl font-semibold text-black "
          >
            Register Your Club
          </Link>
          <div className="flex-none justify-self-end ml-3">
            <div tabIndex={0} className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={toggleMenu}>
                  <Link to="/">Profile</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Settings</Link>
                </li>
                <li
                  onClick={() => {
                    toggleMenu;
                    setShowModal(true);
                  }}
                >
                  <span>Login</span>
                </li>
                <li
                  onClick={() => {
                    toggleMenu;
                    setShowModal(true);
                  }}
                >
                  <span>Signup</span>
                </li>
              </ul>
            </div>
          </div>
        </p>
      </div>

      {/* <div className="collapse-content">
        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
      </div> */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Header;
