"use client";
import Link from "next/link";

import { closeToggle } from "@/redux/toggleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeToggle());
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center p-24">
      Home Page
      <Link href="/level1">level1</Link>
    </div>
  );
}
