"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { closeToggle } from "@/redux/toggleSlice.js";

const Header = () => {
  const toggle = useSelector((state) => state.toggle.value);
  const [isLevelActive, setIsLevelActive] = useState(toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLevelActive(toggle);
  }, [toggle]);

  return (
    <div className="flex justify-between items-center max-w-2xl mx-auto w-full h-[150px] text-4xl">
      <div className="relative">
        {isLevelActive ? (
          <Link href="/">
            <div
              className="items-start border-2 flex justify-center p-2 border-yellow-500 rounded-full hover:-translate-y-1 transition-transform"
              onClick={() => dispatch(closeToggle())}
            >
              <ArrowBackIcon />
            </div>
          </Link>
        ) : (
          <div className="w-[44px]"></div>
        )}
      </div>
      <h1 className="select-none hover:scale-105 transition-transform">
        Quick Games
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
