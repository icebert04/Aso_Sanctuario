// components/faq.js
import React from 'react';

const FAQ = () => {
  return (
    <section className='my-20'>
      <div className="p-8 FAQ">
        <h1 className="text-3xl font-bold mb-10">Frequently Asked Questions</h1>
        <div className='mb-10'>
          <h2 className="text-xl font-bold mb-2 underline-turq">Q: What&apos;s the problem with dogs in the Philippines?</h2>
          <p>
            A: There&apos;s a heartbreaking issue of dog homelessness. Millions of stray dogs roam the streets, facing hunger, illness, and danger. This is caused by unethical breeding practices, lack of spaying/neutering, and pet abandonment.
          </p>
        </div>
        <div className='mb-10'>
          <h2 className="text-xl font-bold mb-2 underline-turq">Q: How does this affect me?</h2>
          <p>
            A: Stray dog overpopulation can lead to public health risks like rabies. It can also cause safety concerns with dog bites, especially for children. But most importantly, it&apos;s an animal welfare issue. These dogs deserve a safe and loving home.
          </p>
        </div>
        <div className='mb-10'>
          <h2 className="text-xl font-bold mb-2 underline-turq">Q: What can I do to help?</h2>
          <p>
            A: There are many ways to make a difference!
          </p>
          <ul>
            <li><b>Adopt, Don&apos;t Shop:</b> Consider adopting a loving dog from a shelter instead of buying from a breeder.</li>
            <li><b>Spay/Neuter Your Pet:</b> Spaying and neutering your pet is the single most effective way to prevent unwanted litters and reduce the homeless dog population.</li>
            <li><b>Donate or Volunteer:</b> Animal shelters rely on donations and volunteers to care for rescued dogs. Every little bit helps!</li>
            <li><b>Spread Awareness:</b> Talk to friends and family about responsible pet ownership and the importance of spaying/neutering. Share information about animal shelters and adoption drives on social media.</li>
          </ul>
        </div>
        <div className='mb-10'>
          <h2 className="text-xl font-bold mb-2 underline-turq">Q: Are there organizations working on this issue?</h2>
          <p>A: Yes! There are many dedicated animal welfare organizations in the Philippines, such as the Philippine Animal Welfare Society (PAWS). They work tirelessly to rescue strays, provide medical care, and find them forever homes.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

