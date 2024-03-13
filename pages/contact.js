// pages/contact.js
import React from 'react';
import Navbar from './components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="p-8">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <p className="text-gray-800">
        You can contact us at example@example.com or call us at 123-456-7890.
      </p>
    </div>
    </>
  );
};

export default Contact;
