// HowItWorks.js
import React from 'react';


const HowItWorks = () => {
  return (
    <div className="HIWcontainer">
      <h2 className="HIWheading">How It Works</h2>
      <div className="HIWstepsContainer">
        <div className="HIWstep">
          <h3 className="HIWstepTitle">Step 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu ipsum aliquam fringilla.</p>
        </div>
        <div className="HIWstep">
          <h3 className="HIWstepTitle">Step 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu ipsum aliquam fringilla.</p>
        </div>
      </div>
      <div className="HIWstep">
        <h3 className="HIWstepTitle">Step 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu ipsum aliquam fringilla.</p>
      </div>
    </div>
  );
};

export default HowItWorks;
