import Link from "next/link";
import React from 'react';

const Header = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full p-4">
      <div className=" text-white-50 text-3xl font-bold">Portfolio</div>
        <div className="flex space-x-6 ml-auto">
            <Link href='/#Home' className="hover:text-gray-300 text-lg">Home</Link>
            <Link href='/#About' className="hover:text-gray-300 text-lg">About</Link>
            <Link href='/#Skills' className="hover:text-gray-300 text-lg">Skills</Link>
            <Link href='/#Contacts' className="hover:text-gray-300 text-lg">Contact</Link>
        </div>
    </nav>
  );
}

export default Header;