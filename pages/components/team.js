// components/MeetTheTeam.js
import Image from 'next/image';
import React from 'react';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

const MeetTheTeam = () => {
  return (
    <section>
      <div className="team-container">
        <h2 className="team-heading">Meet the Team</h2>
        <div className="teamMembers">
          <div className="teamMember">
            <div className="image-container team-img ml-4">
              <Image src="/francis.jpeg" layout="fill" className="image rounded-full" alt="Francis Isberto"/>
            </div>
            <div className="member-info text-center">
              <b className='text-xl'>Francis</b><br/>
              <span className='member-title'>Marketing</span>
              <div className="flex justify-center items-center space-x-4 member-social">
                  <a href="https://www.facebook.com/francis.isberto" passhref target="_blank" rel="noreferrer">
                      <FaFacebook size="15"/> 
                  </a>
                  <a href="#" passhref>
                      <FaInstagram size="15"/> 
                  </a>
              </div>
            </div>
          </div>
          <div className="teamMember">
            <div className="image-container team-img ml-4">
              <Image src="/rachel.jpeg" layout="fill" className="image rounded-full" alt="Rachelle Isberto"/>
            </div>
            <div className="member-info text-center">
              <b className='text-xl'>Rachelle</b><br/>
              <span className='member-title'>Finance</span>
              <div className="flex justify-center items-center space-x-4 member-social">
                  <a href="https://www.facebook.com/francis.isberto" passhref target="_blank" rel="noreferrer">
                      <FaFacebook size="15"/> 
                  </a>
                  <a href="#" passhref>
                      <FaInstagram size="15"/> 
                  </a>
              </div>
            </div>
          </div>
          <div className="teamMember">
            <div className="image-container team-img ml-4">
              <Image src="/luigi.jpeg" layout="fill" className="image rounded-full" alt="Luigi Isberto"/>
            </div>
            <div className="member-info text-center">
              <b className='text-xl'>Luigi</b><br/>
              <span className='member-title'>Tech</span>
              <div className="flex justify-center items-center space-x-4 member-social">
                  <a href="https://www.facebook.com/francis.isberto" passhref target="_blank" rel="noreferrer">
                      <FaFacebook size="15"/> 
                  </a>
                  <a href="#" passhref>
                      <FaInstagram size="15"/> 
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;