import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="p-4 bg-black flex justify-between items-center border-b border-zinc-900">
    <Link href={'/'} className="text-white text-3xl font-bold">
      Logo
    </Link>
    <div className="flex gap-2 items-center">
    <Link href={"https://github.com/ayushsharma74/codezilla"} target="_blank" className="border rounded-md border-zinc-800 p-2 hover:bg-zinc-800">
     <FaGithub size={23} color="white"/>
    </Link>
    <Link href={"#"} className="text-white border border-zinc-800 py-2 px-3 rounded-md font-bold hover:bg-zinc-800 transition-colors">
      Get Started
    </Link>
    </div>
  </nav>
  )
}

export default Navbar