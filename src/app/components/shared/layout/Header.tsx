import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const toggleMenu = (): void => {
    try {
      (document.activeElement as HTMLElement).blur();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-6">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-extra text-primary"
        >
          Clubs
        </Link>
        <Link
          to="/clubs"
          className="btn btn-ghost normal-case text-xl font-semibold text-black"
        >
          Clubs
        </Link>
        <Link
          to="/users/signup"
          className="btn btn-ghost normal-case text-xl font-semibold text-black"
        >
          Register Your Club
        </Link>
      </div>
      <div className="flex-none">
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
            <li onClick={toggleMenu}>
              <Link to="/users/signin">Login</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/users/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
