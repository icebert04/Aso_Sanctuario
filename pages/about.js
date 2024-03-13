// pages/about.js
import React from 'react';
import Navbar from './components/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="p-8">
      <h2 className="text-2xl mb-4">About Us</h2>
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
        ante sed metus luctus, sed suscipit nunc dapibus. Nam faucibus nisi id
        urna ullamcorper, nec vehicula magna condimentum. Vivamus id suscipit
        purus, eu aliquet turpis. Vivamus rhoncus tellus a tincidunt
        ullamcorper. Maecenas sit amet dictum est. Sed vel hendrerit quam, at
        ultricies enim. Cras id mi id leo fermentum posuere. Nulla facilisi.
        Phasellus at condimentum libero, sed consequat elit.
      </p>
    </div>
    </>
  );
};

export default About;
