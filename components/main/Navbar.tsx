'use client'
import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { jura } from '@/fonts/font';
import { usePathname } from 'next/navigation';


const Navbar = () => {

  const pathname = usePathname()

  console.log(pathname);

  return (
    <nav className="px-4 py-2 bg-black flex justify-between items-center border-b border-zinc-900">
      <div className={`${jura.className} flex items-center gap-6 justify-center`}>

    <Link href={'/'} className={`${jura.className} hover:underline text-white text-2xl font-semibold`}>
      GSoC Zilla
    </Link>
    </div>
    <div className={` ${jura.className} flex gap-3`}>

    <Link href={"/starred"} className={`text-white hover:underline ${pathname === '/starred' ? 'underline' : ''} `}>
      Starred
    </Link>
    <Link href={"/organizations"} className={`text-white hover:underline ${pathname === '/organizations' ? 'underline' : ''} `}>
      Organizations
    </Link>
    <Link href={"/issues"} className={`text-white hover:underline ${pathname === '/issues' ? 'underline' : ''} `}>
      Issues
    </Link>
      </div>
    <div className="flex gap-2 items-center">
    <Link href={"https://github.com/ayushsharma74/codezilla"} target="_blank" className="border rounded-md border-zinc-800 p-2 hover:bg-zinc-800">
     <FaGithub size={23} color="white"/>
    </Link>
    <Link href={"#"} className={`${jura.className} text-white border border-zinc-800 py-2 px-3 rounded-md font-semibold hover:bg-zinc-800 transition-colors`}>
      Get Started
    </Link>
    </div>
  </nav>
  )
}

export default Navbar