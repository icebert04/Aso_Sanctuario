import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center p-4 py-6 text-slate-800">
      <div className="flex justify-center items-center space-x-4">
        <Link href="#" passHref className="text-gray-500 hover:text-gray-700">
            <FaFacebook size="24" /> 
        </Link>
        <Link href="#" passHref className="text-gray-500 hover:text-gray-700">
            <FaTwitter size="24" /> 
        </Link>
        <Link href="#" passHref className="text-gray-500 hover:text-gray-700">
            <FaInstagram size="24" /> 
        </Link>
      </div>
      <p className="mt-2"><b>&copy; 2024 Dog Site. All rights reserved.</b></p>
    </footer>
  );
};

export default Footer;
