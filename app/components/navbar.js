"use client"
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="nabvar p-4 min-w-full h-15 flex justify-between items-center bg-zinc-900">
      <div className="flex gap-6">
        <div className="flex justify-between items-center">
          <GiHamburgerMenu className="text-2xl text-zinc-400" />
        </div>
        <div className="flex gap-1">
          <div>
            <FaYoutube className="text-4xl text-red-500" />
          </div>
          <span className="text-2xl text-zinc-400 tracking-tighter">YouTube</span>
        </div>

      </div>

      <div className="flex h-10 px-2 pr-0 gap-1">
        <form className="flex w-full">
          <input className="w-96 p-4 bg-zinc-900 focus:outline-none rounded-l-3xl border border-zinc-600" type="text" placeholder="Search"></input>
          <button className="h-10 p-4 bg-zinc-700 flex items-center justify-between rounded-r-3xl border border-zinc-600">
            <IoIosSearch className="text-xl text-zinc-400" />
          </button>
        </form>
        <button className="h-10 w-10 flex items-center justify-between rounded-3xl bg-zinc-700 border border-zinc-600">
          <FaMicrophone className="text-xl text-zinc-400" />
        </button>
      </div>
      <div>
        <button className="rounded-full px-3 py-1 text-zinc-600 border border-zinc-600">
          Sign in
        </button>
      </div>
    </div>
  );
}
