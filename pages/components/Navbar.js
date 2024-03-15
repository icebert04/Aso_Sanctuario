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
                <Image src="/aso.png" layout="fill" className="image" alt="hedgehog logo"/>
              </div>
        </Link>
    </div>
        <div className='links-container'>
        {/* <Link className='links' href="/about">
            <b className="text-bold">About</b>
        </Link> */}
        <Link className='links' href='/'>
            <b className="text-bold">Contact</b>
        </Link>
        </div>
    </nav>
  );
};

export default Navbar;
