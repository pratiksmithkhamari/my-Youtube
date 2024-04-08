import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.navBar.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 border min-h-screen">
      <ul className="m-4">
        <li className="p-3 hover:bg-slate-200 rounded-lg px-4">
          <Link to="/" className="flex flex-row items-center gap-1 ">
            <MdHome className="text-2xl" />
            Home
          </Link>
        </li>
        <li className="p-3 flex items-center gap-1 hover:bg-slate-200 rounded-lg  ">
          <SiYoutubeshorts className="text-2xl" />
          Shorts
        </li>
        <li className="p-3  flex items-center gap-1 hover:bg-slate-200 rounded-lg ">
          <MdSubscriptions className="text-2xl" />
          Subscription
        </li>
      </ul>
      <h1 className="m-4 font-bold">Subscriptions</h1>
      <ul className="m-4">
        <li className="p-1">Music</li>
        <li className="p-1">Sports</li>
        <li className="p-1">Gaming</li>
        <li className="p-1">Movies</li>
      </ul>
      <h1 className="m-4 font-bold">Watch Later</h1>
      <ul className="m-4">
        <li className="p-1">Music</li>
        <li className="p-1">Sports</li>
        <li className="p-1">Gaming</li>
        <li className="p-1">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
