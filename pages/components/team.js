// components/MeetTheTeam.js
import Link from 'next/link';
import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const MeetTheTeam = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="teamMembers">
        <div className="teamMember">
          <b className='text-xl'>John Doe</b>  
            <div className="flex justify-center items-center space-x-4">
                <Link href="#" passHref>
                    <FaFacebook size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaTwitter size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaInstagram size="15"/> 
                </Link>
            </div>
        </div>
        <div className="teamMember">
          <b className='text-xl'>Jane Smith</b>  
            <div className="flex justify-center items-center space-x-4">
                <Link href="#" passHref>
                    <FaFacebook size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaTwitter size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaInstagram size="15"/> 
                </Link>
            </div>
        </div>
        <div className="teamMember">
          <b className='text-xl'>Michael Johnson</b>  
            <div className="flex justify-center items-center space-x-4">
                <Link href="#" passHref>
                    <FaFacebook size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaTwitter size="15"/> 
                </Link>
                <Link href="#" passHref>
                    <FaInstagram size="15"/> 
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
