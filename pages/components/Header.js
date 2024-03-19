// components/Header.js
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
    <div className="image-container header-img">
      <Image src="/Hero-aso.png" layout="fill" className="image" alt="hedgehog logo"/>
    </div>
      {/* <h1 className='header-title'></h1> */}
    </header>
  );
};

export default Header;
