// components/Navbar.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 navbar">
    <div className="logo">
        <Link href="/">
              <div className="image-container nav-logo ml-4">
                {/* <Image src="" layout="fill" className="image rounded-3xl" alt="hedgehog logo"/> */}
              </div>
        </Link>
    </div>
        <div className='links-container'>
        <Link className='links' href="/about">
            <span className="text-bold">About</span>
        </Link>
        <Link className='links' href="/contact">
            <span className="text-bold">Contact</span>
        </Link>
        </div>
    </nav>
  );
};

export default Navbar;
