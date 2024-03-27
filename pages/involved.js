// pages/Members.js
import Link from 'next/link';
import React from 'react';
import Navbar from './components/Navbar';
import MemberT from './components/members-tiers';
import MemberJ from './components/members-join';
import Footer from './components/Footer';

const Member = () => {
  return (
    <>
    <Navbar/>
    <section className='Member-container'>
     <header className="header Member-header text-center">
        <h1 className='text-4xl font-bold Member-head-text'>Welcome to Aso Sanctuario: <span>Join Our Pack</span><br/><br/> Become a Member and Make a Difference</h1>
        <div>
            <p>At Aso Sanctuario, we&apos;re dedicated to improving the lives of dogs across the Philippines.<br/> Join our pack and become part of a community committed to making a positive impact in the world of dog welfare.</p>
        </div>
     </header>
     {/* Membership Tiers */}
     <MemberT/>
     {/* Membership Join */}
     <MemberJ/>

    <div className='my-20'>
      <h1 className='text-3xl text-center font-bold m-4 p-2'>
        Questions? Contact Us  
      </h1>
      <div className='text-lg  text-center'>
        <p className='my-6'>
          If you have any questions or need assistance, please don&apos;t hesitate to reach out to us at</p>
          <Link className='grid-buttons-item' href='/'><button>Contact</button></Link>
        <p className='my-6'>Together, let&apos;s wag more, bark less, and make a difference for dogs in need.<br/> Join <b>Aso Sanctuario</b> today!</p>
      </div>
    </div>
    <Footer/>
    </section>
    </>
  );
};

export default Member;