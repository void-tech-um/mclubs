import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import AuthModal from "../AuthModal";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  //const { user, logout } = useAuth();
  //console.log(user);
  const toggleMenu = (): void => {
    try {
      (document.activeElement as HTMLElement).blur();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    // <div className="flex flex-col justify-between font-inter min-h-screen">
    //   <Header />
    //   {children}
    //   <Footer />
    // </div>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Clubs</div>
          <div className="flex-none hidden lg:flex justify-center gap-4">
            <button className="btn btn-sm">Register Your Club</button>
            <div tabIndex={0} className="dropdown dropdown-bottom dropdown-end">
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
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
