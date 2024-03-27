// components/Members.js
import React from 'react';


const MemberT = () => {
    return (
        <>
        <div className='w-99 MemberT-container'>
            <ul className='MemberT'>
                <li className='px-4 py-8 MemberT-child'>
                    <ul>
                    <h1 className='font-bold text-2xl'>Basic Membership Tier</h1>
                        <li className='Member-list-item'>Subscription Fee: Php 1,200 per year</li>
                        <li className='Member-list-item-head'>
                            <h2 className='font-bold text-xl Member-list-item-head'>Benefits:</h2>
                            <ul>
                                <li className='Member-list-item'>Access to member-exclusive newsletters and updates.</li>
                                <li className='Member-list-item'>10% discount on all products and services offered by the organization.</li>
                                <li className='Member-list-item'>Invitation to member-only events and webinars.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='px-4 py-8 MemberT-child'>
                    <ul>
                    <h1 className='font-bold text-2xl'>Founder&apos;s Circle Membership Tier</h1>
                        <li className='Member-list-item'>Invitation-only tier for select individuals who make a significant contribution to the organization&apos;s mission and vision.</li>
                        <li className='Member-list-item'>Subscription Fee: Variable (based on individual contributions)</li>
                        <li className='Member-list-item-head'>
                            <h2 className='font-bold text-xl Member-list-item-head'>Benefits:</h2>
                            <ul>
                                <li className='Member-list-item'>Exclusive access to private roundtable discussions with organization leadership.</li>
                                <li className='Member-list-item'>Opportunity to participate in strategic planning sessions and decision-making processes.</li>
                                <li className='Member-list-item'>Customized recognition and gratitude gestures tailored to the individual&apos;s contribution.</li>
                                <li className='Member-list-item'>Right to propose, vote, and join our organization&apos;s preferred guilds.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        </>
    )
}
export default MemberT