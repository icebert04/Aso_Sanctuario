// components/Members.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MemberJ = () => {
    return (
        <>
        <section className='MemberJ-container'>
            <div className='MemberJ-grid'>
                <div>
                    <h1 className='text-2xl text-center font-bold'>Join Us Today</h1>
                    <p className='text-xl'>Ready to make a difference? Choose your membership tier and become part of our journey to create a brighter future for dogs in need.</p>
                    <div className='grid-buttons'>
                        <Link className='grid-buttons-item' href='/'>
                            <button>Join Now <br/> Basic Membership</button>
                        </Link>
                        
                        <Link className='grid-buttons-item' href='/'>
                            <button>Apply<br/> for Founder&apos;s Circle Membership</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='J-image image-container'>
                <Image src='/dog-black.png' layout='fill' className='image' alt='dog logo'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default MemberJ