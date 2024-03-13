// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center p-4 py-6 text-slate-800">
      <div className="flex justify-center items-center space-x-4">
        <Link href="#" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faFacebook} size="lg"/>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTwitter} size="lg"/>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
        </Link>
      </div>
      <p className="mt-2"><b>&copy; 2024 Dog Site. All rights reserved.</b></p>
    </footer>
  );
};

export default Footer;

