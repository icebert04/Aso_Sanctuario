// components/faq.js

import React from 'react';

const FAQ = () => {
  return (
    <div className="p-8 FAQ">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 underline">Question 1: What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 underline">Question 2: Why do we use it?</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 underline">Question 3: Where does it come from?</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 underline">Question 4: What is the first line of Lorem Ipsum?</h2>
        <p>The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 underline">Question 5: Why do we use it?</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  );
};

export default FAQ;
